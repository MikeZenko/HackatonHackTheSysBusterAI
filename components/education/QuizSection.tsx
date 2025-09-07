'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, CheckCircle, XCircle, ChevronRight } from 'lucide-react'

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const quiz = {
    title: 'Test Your Debt Knowledge',
    questions: [
      {
        question: 'Which debt repayment method focuses on paying the smallest balance first?',
        options: ['Avalanche method', 'Snowball method', 'Minimum payment method', 'Random method'],
        correct: 1,
        explanation: 'The snowball method prioritizes paying off the smallest debts first for psychological wins.'
      },
      {
        question: 'What APR is generally considered predatory for personal loans?',
        options: ['Above 10%', 'Above 20%', 'Above 36%', 'Above 50%'],
        correct: 2,
        explanation: 'Most states cap APR at 36% to protect consumers from predatory lending.'
      },
      {
        question: 'What percentage of your income should go towards debt payments?',
        options: ['Less than 10%', 'Less than 20%', 'Less than 36%', 'Less than 50%'],
        correct: 2,
        explanation: 'The 28/36 rule suggests total debt payments should not exceed 36% of gross income.'
      }
    ]
  }

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowResult(true)
    if (answerIndex === quiz.questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  const question = quiz.questions[currentQuestion]
  const isLastQuestion = currentQuestion === quiz.questions.length - 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-6"
    >
      <div className="flex items-center space-x-2 mb-4">
        <Brain className="w-6 h-6 text-primary-600" />
        <h2 className="text-xl font-semibold">{quiz.title}</h2>
      </div>

      {currentQuestion < quiz.questions.length ? (
        <>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </span>
              <span className="text-sm font-medium">
                Score: {score}/{quiz.questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h3 className="text-lg font-medium mb-4">{question.question}</h3>

          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && handleAnswer(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  showResult
                    ? index === question.correct
                      ? 'bg-success-100 dark:bg-success-900/20 border-2 border-success-500'
                      : index === selectedAnswer
                      ? 'bg-danger-100 dark:bg-danger-900/20 border-2 border-danger-500'
                      : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700'
                    : 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && index === question.correct && (
                    <CheckCircle className="w-5 h-5 text-success-600" />
                  )}
                  {showResult && index === selectedAnswer && index !== question.correct && (
                    <XCircle className="w-5 h-5 text-danger-600" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
            >
              <p className="text-sm text-blue-700 dark:text-blue-300">
                {question.explanation}
              </p>
            </motion.div>
          )}

          {showResult && (
            <button
              onClick={isLastQuestion ? resetQuiz : nextQuestion}
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              {isLastQuestion ? 'Retake Quiz' : 'Next Question'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          )}
        </>
      ) : (
        <div className="text-center py-8">
          <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
          <p className="text-lg mb-6">
            Your score: {score}/{quiz.questions.length}
          </p>
          <button
            onClick={resetQuiz}
            className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      )}
    </motion.div>
  )
}