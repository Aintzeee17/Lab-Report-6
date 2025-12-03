// Stop any existing timer before starting a new question
function displayQuestion() {
    clearInterval(timer); // ← Pastikan timer lama berhenti
    
    if (currentQuestionIndex < currentQuestions.length) {
        const currentQ = currentQuestions[currentQuestionIndex];
        
        // Reset state for new question
        selectedAnswer = null;
        isAnswerSubmitted = false;
        feedbackMessageEl.textContent = '\u00A0';
        feedbackMessageEl.className = '';
        submitBtn.disabled = true;
        nextBtn.disabled = true;
        
        questionTextEl.textContent = `Q${currentQuestionIndex + 1}: ${currentQ.question}`;
        
        optionsContainerEl.innerHTML = '';
        currentQ.options.forEach(option => {
            const button = document.createElement('button');
            button.className = 'option';
            button.textContent = option;
            button.onclick = () => selectOption(button, option);
            optionsContainerEl.appendChild(button);
        });

        startTimer(); // Start fresh timer
    } else {
        // Quiz finished
        clearInterval(timer);
        questionTextEl.textContent = "Quiz Complete!";
        optionsContainerEl.innerHTML = `<p>Congratulations! You finished the quiz.</p><p>Final Score: ${score} / ${currentQuestions.length}</p>`;
        feedbackMessageEl.textContent = 'Thank you for playing!';
        submitBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        startBtn.textContent = 'Restart Quiz';
        startBtn.style.display = 'block';
    }
}
