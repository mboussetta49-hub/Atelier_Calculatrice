pipeline {
    agent any
    stages {
        stage('Hello') {
            steps {
                echo 'Le pipeline Jenkins fonctionne !'
                // On utilise "bat" à la place de "sh" car on est sur Windows
                bat 'node index.js' 
            }
        }
    }
}