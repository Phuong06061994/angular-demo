pipeline {
    agent {label 'node-slave-a6d79bf4'}
    environment {
        DOCKER_IMAGE = "phuong06061994/angular-demo" // Replace with your Docker Hub repository
        DOCKER_CREDENTIALS_ID = "dockerhub-credential" // Jenkins credentials ID for Docker Hub
    }
    stages {
        stage('Checkout') {
            steps {
                 // Checkout the code from your repository
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using Dockerfile in the Angular project
                    docker.build(DOCKER_IMAGE)
                }
            }
        }
        stage('Login to Docker Hub') {
            steps {
                script {
                    // Log in to Docker Hub
                    docker.withRegistry('', DOCKER_CREDENTIALS_ID) {
                        // No steps here as we just need to authenticate
                    }
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    // Tag and push the image to Docker Hub
                    docker.image(DOCKER_IMAGE).push('latest')
                }
            }
        }
    }
    post {
        always {
            script {
                // Clean up any images left after the build
                docker.image(DOCKER_IMAGE).remove()
            }
            cleanWs()
        }
    }
}
