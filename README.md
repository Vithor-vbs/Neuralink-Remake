# Neuralink Remake

The website for Neuralink is built using React and is hosted on the AWS cloud. In this documentation, we will discuss how I created a static website copy of the [neuralink.com](https://neuralink.com/) using React and AWS cloud technologies to create external infrastructure.

Here is a complete diagram of the system:

![Captura de tela 2023-04-17 233812](https://user-images.githubusercontent.com/69211568/232792840-08191003-8e42-4ec3-9892-cc9d37ffa75e.png)

### `Prerequisites / Technologies Used`

To follow this documentation, you will need the following:

- AWS account with necessary permissions
- Knowledge of AWS CloudFormation, EC2, and Docker
- Knowledge of React and npm package manager
- Basic knowledge of github-action workflow pipeline
- Uptime Koma monitoring tool

### `Steps`

**1. Build and containerize the React application using Docker. We can use the Dockerfile to build the image and then push the image to AWS ECR with Github Actions.**

We need to write a Dockerfile that contains the necessary steps to build the image. After building the image, we can push it to AWS ECR. Here is the Dockerfile used:

> FROM node:latest
>
> RUN mkdir -p /app/src
>
> WORKDIR /app/src
>
> COPY package.json .
>
> RUN npm install
>
> COPY . .
>
> EXPOSE 3000
>
> CMD ["npm", "start"]

OBS: Being a React application, in order to containerize the application we have to copy the dependencies and install npm in docker

**2. Create a CI/CD pipeline using github actions that pushes the docker image to AWS ECR when modifying the main branch.**

Copy the [AWS deploy to ECR](https://github.com/marketplace/actions/aws-ecr) workflow in github action marketplace and modify the secrets to connect to your AWS user.

Being a docker image, you will have to build and tag the image to send to ECR:

```
 run: |
 docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
          docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
```

OBS: if you want to tag your deploys using the _major, minor, patch_ method, you can copy the **build/git_updates.sh** file.

**3. Create an EC2 instance on AWS using the CloudFormation stack. We can specify the instance type, AMI ID, and other necessary parameters in the CloudFormation template.**

You can start using this template:

```
Resources:
  MyEC2INstance:
    Type: AWS::EC2::Instance
    Properties:
      ImageId: ami-0f960c8194f5d8df5
      InstanceType: t3.micro
      KeyName: <name of your keypair created>
      SecurityGroupIds:
        <create a Anywhere sg connection>
```

This should create your instance with defined specifications.

**4. SSH into the EC2 instance and install Docker using the package manager for the instance’s operating system.**

After connected into your instance via SSH,
create an admin user on AWS and connect it with AWS CLI using the **_aws configure_** command and passing the key-value parameters

Now install docker on the instance.

> sudo yum update -y

> sudo yum install docker

OBS: after installing docker, restart the instance for the changes to be processed

> sudo service docker start

> docker info

OBS: if you received credential error with that command, you will have to add a user to the docker group: **_sudo usermod -aG docker ec2-user_**

After that, you can connect to your ECR repository following the steps provided in the _connect_ session of the repo

**5. Pull and run the Docker image from AWS ECR and start the container:**

> docker pull <your_ECR_image>

> docker run -p 80:3000 -d <your_ECR_image>

**6. Test the website to ensure it is running correctly.**

After these steps you might be able to access the public domain of your application on browser.

**7. if you wish, you can set up uptime monitoring to monitor the website and receive alerts in case of downtime.**

Recommended tool: install Uptime Kuma

> docker run -d --restart=always -p 3001:3001 -v uptime-kuma:/app/data --name uptime-kuma louislam/uptime-kuma:1

Create an user and then pass your instance URL to monitor the site.
