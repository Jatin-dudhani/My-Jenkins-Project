pipeline {
    agent any

    environment {
        APP_NAME = 'jenkins-learning-project'
        DOCKER_IMAGE = "${APP_NAME}:${BUILD_NUMBER}"
    }

    parameters {
        string(name: 'GREETING_NAME', defaultValue: 'Jenkins', description: 'Name to greet in the build')
        booleanParam(name: 'RUN_TESTS', defaultValue: true, description: 'Run unit tests')
        booleanParam(name: 'BUILD_DOCKER', defaultValue: true, description: 'Build Docker image')
        choice(name: 'DEPLOY_ENV', choices: ['dev', 'staging', 'prod'], description: 'Deployment environment')
    }

    tools {
        nodejs 'NodeJS-26'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo "Building ${APP_NAME} - Build #${BUILD_NUMBER}"
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            when {
                expression { params.RUN_TESTS == true }
            }
            steps {
                sh 'npm test'
            }
            post {
                always {
                    junit 'coverage/junit.xml'
                }
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Building application..."'
                sh 'echo "Build completed at $(date)" > build-info.txt'
            }
        }

        stage('Docker Build') {
            when {
                allOf {
                    expression { params.BUILD_DOCKER == true }
                    expression { sh(script: 'command -v docker', returnStatus: true) == 0 }
                }
            }
            steps {
                script {
                    dockerImage = docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Deploy to Dev') {
            when {
                expression { params.DEPLOY_ENV == 'dev' }
            }
            steps {
                echo "Deploying to DEV environment..."
                sh 'echo "Deployed to DEV" > deploy-dev.log'
            }
        }

        stage('Deploy to Staging') {
            when {
                expression { params.DEPLOY_ENV == 'staging' }
            }
            steps {
                input message: 'Deploy to Staging?', ok: 'Deploy'
                echo "Deploying to STAGING environment..."
                sh 'echo "Deployed to STAGING" > deploy-staging.log'
            }
        }

        stage('Deploy to Production') {
            when {
                expression { params.DEPLOY_ENV == 'prod' }
            }
            steps {
                input message: 'Deploy to PRODUCTION?', ok: 'Deploy', submitter: 'admin'
                echo "Deploying to PRODUCTION environment..."
                sh 'echo "Deployed to PROD" > deploy-prod.log'
            }
        }
    }

    post {
        always {
            cleanWs()
            archiveArtifacts artifacts: 'build-info.txt, deploy-*.log', allowEmptyArchive: true
        }
        success {
            echo "Build ${BUILD_NUMBER} completed successfully!"
        }
        failure {
            echo "Build ${BUILD_NUMBER} failed!"
        }
        unstable {
            echo "Build ${BUILD_NUMBER} is unstable (tests failed)."
        }
    }
}