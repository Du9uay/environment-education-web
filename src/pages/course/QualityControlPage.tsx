import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, TestTube, FileText, FlaskConical, ArrowLeft, ArrowRight } from '../../components/Icons';

const QualityControlPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 页面标题 */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-water-500 rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">质量控制方法</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            通过空白实验、采样器具抽检、全程序空白样品、现场平行样品等方法，
            保证采样过程中数据无偏差，确保监测数据的准确性和可靠性
          </p>
        </motion.div>

        {/* 采样质量控制的基本要求 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <CheckCircle className="w-8 h-8 mr-3 text-primary-400" />
            采样质量控制的基本要求
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* 空白实验 */}
            <div className="bg-primary-500/10 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <TestTube className="w-8 h-8 text-primary-400 mr-3" />
                <h4 className="text-xl font-semibold text-primary-300">空白实验</h4>
              </div>
              
              <p className="text-white/80 mb-4">
                进行空白实验，即采集空白水样（用纯水代替实际水样），
                按照与实际水样相同的步骤进行处理和分析，以检查实验过程中是否引入了杂质。
              </p>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">实例说明</h5>
                <p className="text-sm text-white/70">
                  在测定水样中的COD时，同时做空白实验，若空白实验的COD值过高，
                  说明实验过程中有污染。
                </p>
              </div>
            </div>
            
            {/* 采样器具抽检 */}
            <div className="bg-secondary-500/10 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-secondary-400 mr-3" />
                <h4 className="text-xl font-semibold text-secondary-300">采样器具抽检</h4>
              </div>
              
              <p className="text-white/80 mb-4">
                定期对采样器具进行抽检，检查器具是否符合要求。
              </p>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">检查项目</h5>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• 采样瓶的密封性</li>
                  <li>• 采样器的材质是否符合标准</li>
                  <li>• 容器的清洁度</li>
                  <li>• 器具的完好性</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 全程序空白样品 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <FlaskConical className="w-8 h-8 mr-3 text-water-400" />
            全程序空白样品
          </h3>
          
          <div className="space-y-6">
            <p className="text-white/90 leading-relaxed">
              全程序空白样品是指从采样开始到实验室分析结束的整个过程中，
              使用空白水样按照与实际样品相同的步骤进行处理和分析得到的样品。
              通过全程序空白样品可以检查整个分析过程中是否存在污染或干扰。
            </p>
            
            <div className="bg-water-500/10 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-water-300 mb-4">操作流程</h4>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-water-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-white">1</span>
                  </div>
                  <p className="text-sm text-white/80">准备空白水样</p>
                  <p className="text-xs text-white/60 mt-1">使用纯水</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-water-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-white">2</span>
                  </div>
                  <p className="text-sm text-white/80">同步处理</p>
                  <p className="text-xs text-white/60 mt-1">与实际样品相同步骤</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-water-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-white">3</span>
                  </div>
                  <p className="text-sm text-white/80">运输保存</p>
                  <p className="text-xs text-white/60 mt-1">相同条件</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-water-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl text-white">4</span>
                  </div>
                  <p className="text-sm text-white/80">分析检测</p>
                  <p className="text-xs text-white/60 mt-1">同批次分析</p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-500/10 border border-primary-400/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-primary-300 mb-3">应用实例</h4>
              <p className="text-white/80">
                在测定某污水处理厂出水的氨氮时，同时做全程序空白样品，
                若全程序空白样品的氨氮值过高，说明在采样、运输、实验室分析等某个环节引入了氨氮，
                需要排查具体污染源并采取纠正措施。
              </p>
            </div>
          </div>
        </motion.div>

        {/* 现场平行样品 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <TestTube className="w-8 h-8 mr-3 text-secondary-400" />
            现场平行样品
          </h3>
          
          <div className="space-y-6">
            <p className="text-white/90 leading-relaxed">
              现场平行样品是指在同一采样点、同一时间采集两份相同的水样。
              通过分析现场平行样品的测定结果，可以评估采样过程和现场测定的重复性。
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-secondary-300 mb-3">操作要点</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-secondary-400 mr-2">✓</span>
                    <span>同一采样点</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-400 mr-2">✓</span>
                    <span>同一时间采集</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-400 mr-2">✓</span>
                    <span>相同的采样方法</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary-400 mr-2">✓</span>
                    <span>相同的保存条件</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-earth-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-earth-300 mb-3">评估标准</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-earth-400 mr-2">•</span>
                    <span>测定结果偏差在允许范围内</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-400 mr-2">•</span>
                    <span>相对偏差符合质控要求</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-400 mr-2">•</span>
                    <span>反映采样过程可靠性</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-400 mr-2">•</span>
                    <span>评估现场测定重复性</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-water-300 mb-3">实例说明</h4>
              <p className="text-white/80">
                在某泵站出水口采集两份水样，同时进行pH值的现场测定，
                若两份水样的pH值测定结果偏差在允许范围内（如±0.1 pH单位），
                说明采样和现场测定过程较为可靠。
              </p>
            </div>
          </div>
        </motion.div>

        {/* 质量控制体系总结 */}
        <motion.div 
          className="glass-card p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">质量控制体系总结</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">准</span>
              </div>
              <h4 className="font-semibold text-white mb-2">准确性控制</h4>
              <p className="text-sm text-white/70">
                通过空白实验检查污染
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary-500/20 to-secondary-600/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">精</span>
              </div>
              <h4 className="font-semibold text-white mb-2">精密度控制</h4>
              <p className="text-sm text-white/70">
                通过平行样品评估重复性
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-water-500/20 to-water-600/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-water-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">全</span>
              </div>
              <h4 className="font-semibold text-white mb-2">全程控制</h4>
              <p className="text-sm text-white/70">
                从采样到分析全过程监控
              </p>
            </div>
          </div>
        </motion.div>

        {/* 章节导航按钮 */}
        <motion.div
          className="flex justify-between items-center pt-12 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to="/course/sample-preservation"
            className="group relative overflow-hidden px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white/70 hover:text-white font-medium transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              上一章：样品保存运输
            </span>
          </Link>

          <Link
            to="/course/sampling-notes"
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10 flex items-center">
              下一章：采样注意事项
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default QualityControlPage;