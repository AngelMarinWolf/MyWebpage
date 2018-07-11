pipeline {
    agent any

    stages {
        def container
        stage('Build') {
            steps {
                container = docker.build("WebApplication")
            }
        }
        // stage('Test') {
        //     steps {
        //         echo 'Testing..'
        //     }
        // }
        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying....'
        //     }
        // }
    }
}
