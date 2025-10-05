import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, RefreshCw, ArrowRight, Droplets } from '../components/Icons';

const CourseTestPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('multiple');
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30分钟

  // 计时器
  useEffect(() => {
    if (timeRemaining > 0 && !showResults) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0) {
      handleSubmit();
    }
  }, [timeRemaining, showResults]);

  // 低难度选择题（基于课程讲义第六板块）
  const lowDifficultyQuestions = [
    {
      id: 'low1',
      question: '污水处理厂出水采样点应设置在？',
      options: [
        'A. 厂区外污水管网接入处',
        'B. 污水处理设施出水口处',
        'C. 泵站进水口处',
        'D. 二沉池进水口处'
      ],
      correct: 'B'
    }
  ];

  // 中等难度连线题
  const matchingQuestions = [
    {
      id: 'match1',
      question: '将左侧的采样器材与右侧的适用场景连线',
      leftItems: [
        '虹吸采样器',
        '聚乙烯瓶',
        '便携式pH计'
      ],
      rightItems: [
        '手动吸取水样',
        '采集易氧化水样',
        '现场测定pH值'
      ],
      correctMatches: {
        '虹吸采样器': '手动吸取水样',
        '聚乙烯瓶': '采集易氧化水样',
        '便携式pH计': '现场测定pH值'
      }
    }
  ];

  // 中等难度词义配对题
  const pairingQuestions = [
    {
      id: 'pair1',
      question: '将原则与对应的解释配对',
      pairs: {
        '代表性原则': '采样能代表污水实际水质情况',
        '规范性原则': '采样过程要按照规定步骤操作',
        '完整性原则': '采样及相关环节要完整无缺失'
      }
    }
  ];

  // 高难度选择题
  const highDifficultyQuestions = [
    {
      id: 'high1',
      question: '《污水监测技术规范》HJ91.1-2019出台的主要背景是？',
      options: [
        'A. 为了增加污水处理厂数量',
        'B. 以往污水监测存在采样不规范、数据可靠性不足等问题',
        'C. 为了提高污水处理效率',
        'D. 为了美化城市环境'
      ],
      correct: 'B'
    }
  ];

  // 高难度填空题
  const fillBlankQuestions = [
    {
      id: 'fill1',
      question: '污水处理厂进水采样点应设置在__________，用于采集未经处理的原水。',
      answer: '污水处理设施进水口处'
    }
  ];

  // 低难度排序题
  const sequenceQuestions = [
    {
      id: 'seq1',
      question: '将以下采样步骤按正确顺序排列',
      items: [
        '准备采样器材',
        '明确采样目的',
        '确定采样点位',
        '安排采样时间'
      ],
      correctOrder: [
        '明确采样目的',
        '准备采样器材',
        '确定采样点位',
        '安排采样时间'
      ]
    }
  ];

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateScore = () => {
    let score = 0;
    let totalQuestions = 0;

    // 计算选择题得分
    [...lowDifficultyQuestions, ...highDifficultyQuestions].forEach(q => {
      totalQuestions++;
      if (answers[q.id] === q.correct) score++;
    });

    // 计算填空题得分
    fillBlankQuestions.forEach(q => {
      totalQuestions++;
      if (answers[q.id]?.toLowerCase().trim() === q.answer.toLowerCase().trim()) score++;
    });

    // 简化其他题型的计算
    totalQuestions += matchingQuestions.length + pairingQuestions.length + sequenceQuestions.length;
    
    return Math.round((score / totalQuestions) * 100);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    setTimeRemaining(30 * 60);
    setCurrentSection('multiple');
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 页面标题 */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-water-500 rounded-full mb-6">
            <Droplets className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">第六板块</h1>
          <h2 className="text-2xl font-semibold text-water-200 mb-4">课堂测试</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            通过综合测试检验您对水质样品采样与保存知识的掌握程度
          </p>
        </motion.div>

        {!showResults ? (
          <>
            {/* 计时器 */}
            <div className="glass-card p-4 mb-6 text-center">
              <div className="text-2xl font-bold text-white">
                剩余时间: {formatTime(timeRemaining)}
              </div>
            </div>

            {/* 题目类型选择 */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {['multiple', 'matching', 'sequence', 'fillblank'].map(section => (
                <button
                  key={section}
                  onClick={() => setCurrentSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    currentSection === section
                      ? 'bg-primary-500 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {section === 'multiple' ? '选择题' :
                   section === 'matching' ? '连线题' :
                   section === 'sequence' ? '排序题' : '填空题'}
                </button>
              ))}
            </div>

            {/* 题目内容 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8"
              >
                {currentSection === 'multiple' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-4">选择题</h3>
                    {[...lowDifficultyQuestions, ...highDifficultyQuestions].map((q, index) => (
                      <div key={q.id} className="space-y-3">
                        <p className="text-white font-medium">
                          {index + 1}. {q.question}
                        </p>
                        <div className="space-y-2">
                          {q.options.map(option => (
                            <label
                              key={option}
                              className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 cursor-pointer transition-colors"
                            >
                              <input
                                type="radio"
                                name={q.id}
                                value={option[0]}
                                checked={answers[q.id] === option[0]}
                                onChange={() => handleAnswer(q.id, option[0])}
                                className="text-primary-500"
                              />
                              <span className="text-white/80">{option}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentSection === 'matching' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-4">连线题</h3>
                    {matchingQuestions.map(q => (
                      <div key={q.id}>
                        <p className="text-white font-medium mb-4">{q.question}</p>
                        <div className="grid grid-cols-2 gap-8">
                          <div className="space-y-3">
                            <h4 className="text-primary-300 font-medium mb-2">采样器材</h4>
                            {q.leftItems.map(item => (
                              <div key={item} className="p-3 bg-white/5 rounded-lg text-white/80">
                                {item}
                              </div>
                            ))}
                          </div>
                          <div className="space-y-3">
                            <h4 className="text-secondary-300 font-medium mb-2">适用场景</h4>
                            {q.rightItems.map(item => (
                              <div key={item} className="p-3 bg-white/5 rounded-lg text-white/80">
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentSection === 'sequence' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-4">排序题</h3>
                    {sequenceQuestions.map(q => (
                      <div key={q.id}>
                        <p className="text-white font-medium mb-4">{q.question}</p>
                        <div className="space-y-2">
                          {q.items.map((item, index) => (
                            <div key={item} className="p-3 bg-white/5 rounded-lg text-white/80 flex items-center">
                              <span className="w-8 h-8 bg-primary-500/20 text-primary-300 rounded-full flex items-center justify-center mr-3">
                                {index + 1}
                              </span>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {currentSection === 'fillblank' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white mb-4">填空题</h3>
                    {fillBlankQuestions.map((q, index) => (
                      <div key={q.id} className="space-y-3">
                        <p className="text-white font-medium">
                          {index + 1}. {q.question}
                        </p>
                        <input
                          type="text"
                          value={answers[q.id] || ''}
                          onChange={(e) => handleAnswer(q.id, e.target.value)}
                          placeholder="请输入答案"
                          className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary-400"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* 提交按钮 */}
            <div className="flex justify-center mt-8">
              <button
                onClick={handleSubmit}
                className="btn-primary bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                提交答案
              </button>
            </div>
          </>
        ) : (
          /* 结果展示 */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 text-center"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-water-500 to-water-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-16 h-16 text-white" />
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">测试完成！</h2>
            
            <div className="text-5xl font-bold text-primary-300 mb-6">
              {calculateScore()}分
            </div>

            <p className="text-xl text-white/80 mb-8">
              {calculateScore() >= 80 ?
                '恭喜您！您已经很好地掌握了水质监测的专业知识，可以进入实践操作阶段。' :
                calculateScore() >= 60 ?
                '您对水质监测知识有一定掌握，建议复习薄弱环节，加强实操练习。' :
                '建议您重新学习相关章节，特别关注采样规范、点位布置和质量控制。'}
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={handleReset}
                className="btn-glass flex items-center text-white/80 hover:text-white px-6 py-3 rounded-xl transition-all duration-300"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                重新测试
              </button>
              <Link
                to="/course-summary"
                className="btn-primary bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center"
              >
                查看课程总结
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CourseTestPage;