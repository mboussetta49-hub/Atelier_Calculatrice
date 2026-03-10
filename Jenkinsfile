pipeline {
    agent any

    stages {
        stage('Initialisation') {
            steps {
                echo 'Lancement du test...'
            }
        }
        stage('Execution') {
            steps {
                // "bat" est obligatoire sur Windows à la place de "sh"
                bat 'node index.js'
            }
        }
    }
}