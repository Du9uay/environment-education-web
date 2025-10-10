import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FlaskConical, ArrowRight, FileText, TestTube, Droplets, ArrowLeft } from '../../components/Icons';

const SamplePreservationPage: React.FC = () => {
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
            <FlaskConical className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">样品保存运输</h1>
          <p className="text-xl text-white/80">
            水质样品保存、运输和交接规范
          </p>
        </motion.div>

        {/* 样品保存注意点 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Droplets className="w-8 h-8 mr-3 text-primary-400" />
            样品保存注意点
          </h3>
          
          <div className="space-y-6">
            <p className="text-white/90 leading-relaxed">
              样品保存要注意防止样品变质，不同的水样有不同的保存要求。运输时要保证样品的保存条件，
              确保运输过程中温度符合要求。
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary-300 mb-3">微生物水样</h4>
                <p className="text-white/80 mb-3">
                  要尽快冷藏保存，防止微生物繁殖或死亡
                </p>
                <div className="bg-white/5 rounded p-3">
                  <p className="text-sm text-white/70">
                    温度要求：2-5℃冷藏
                  </p>
                </div>
              </div>
              
              <div className="bg-secondary-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-secondary-300 mb-3">重金属水样</h4>
                <p className="text-white/80 mb-3">
                  要加入酸进行酸化保存，防止重金属被容器吸附或发生化学变化
                </p>
                <div className="bg-white/5 rounded p-3">
                  <p className="text-sm text-white/70">
                    加硝酸调pH值&lt;2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 样品的常见保存方式 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <TestTube className="w-8 h-8 mr-3 text-water-400" />
            样品的常见保存方式
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-water-500/10 rounded-lg p-6">
              <div className="w-12 h-12 bg-water-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">❄️</span>
              </div>
              <h4 className="text-lg font-semibold text-water-300 mb-3">冷藏保存</h4>
              <p className="text-white/80 mb-3">
                适用于需低温保存的水样
              </p>
              <ul className="text-sm text-white/70 space-y-1">
                <li>• 微生物水样</li>
                <li>• 部分有机物水样</li>
                <li>• 保存温度：2-5℃</li>
              </ul>
            </div>
            
            <div className="bg-primary-500/10 rounded-lg p-6">
              <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🧊</span>
              </div>
              <h4 className="text-lg font-semibold text-primary-300 mb-3">冷冻保存</h4>
              <p className="text-white/80 mb-3">
                适用于挥发性有机物水样
              </p>
              <ul className="text-sm text-white/70 space-y-1">
                <li>• 挥发性有机物</li>
                <li>• 特殊样品</li>
                <li>• 保存温度：-20℃左右</li>
              </ul>
            </div>
            
            <div className="bg-secondary-500/10 rounded-lg p-6">
              <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚗️</span>
              </div>
              <h4 className="text-lg font-semibold text-secondary-300 mb-3">酸化保存</h4>
              <p className="text-white/80 mb-3">
                适用于重金属水样
              </p>
              <ul className="text-sm text-white/70 space-y-1">
                <li>• 加入硝酸等酸</li>
                <li>• 调节pH值&lt;2</li>
                <li>• 防止离子沉淀或吸附</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-earth-500/10 border border-earth-400/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-earth-300 mb-3">实例说明</h4>
            <p className="text-white/80">
              采集含汞水样时，加入硝酸酸化至pH&lt;2，防止汞离子被容器吸附或发生化学变化，
              确保样品在运输和保存过程中保持稳定。
            </p>
          </div>
        </motion.div>

        {/* 样品运输 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <ArrowRight className="w-8 h-8 mr-3 text-primary-400" />
            样品运输
          </h3>
          
          <div className="space-y-6">
            <p className="text-white/90 leading-relaxed">
              运输时要保证样品的保存条件，确保运输过程中温度符合要求。
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">运输设备</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-water-400 mr-2">✓</span>
                    <span>冷藏样品用冷藏箱运输</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-water-400 mr-2">✓</span>
                    <span>配备温度监控设备</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-water-400 mr-2">✓</span>
                    <span>防震防碰撞包装</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">运输要求</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">✓</span>
                    <span>保持规定的温度条件</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">✓</span>
                    <span>避免阳光直射</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">✓</span>
                    <span>尽快送达实验室</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 样品交接 */}
        <motion.div 
          className="glass-card p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <FileText className="w-8 h-8 mr-3 text-secondary-400" />
            样品交接
          </h3>
          
          <div className="space-y-6">
            <p className="text-white/90 leading-relaxed">
              样品交接时要填写交接单，明确样品的数量、保存状态、采样点位、交接时间等信息。
              交接双方要签字确认。
            </p>
            
            <div className="bg-secondary-500/10 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-secondary-300 mb-4">交接流程</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white text-sm mr-3">1</span>
                  <div className="flex-1">
                    <p className="text-white/90">检查样品容器完好性</p>
                    <p className="text-sm text-white/60 mt-1">确认容器无破损、无泄漏</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white text-sm mr-3">2</span>
                  <div className="flex-1">
                    <p className="text-white/90">核对保存条件</p>
                    <p className="text-sm text-white/60 mt-1">温度、保存剂等是否符合要求</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white text-sm mr-3">3</span>
                  <div className="flex-1">
                    <p className="text-white/90">填写交接单</p>
                    <p className="text-sm text-white/60 mt-1">记录样品信息、数量、状态等</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white text-sm mr-3">4</span>
                  <div className="flex-1">
                    <p className="text-white/90">双方签字确认</p>
                    <p className="text-sm text-white/60 mt-1">交接双方签字，确保责任明确</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-water-300 mb-3">实例说明</h4>
              <p className="text-white/80">
                某实验室接收采样人员送来的水样时，要检查水样的保存容器是否完好、
                保存条件是否符合要求，并在交接单上记录相关信息，确保样品质量可追溯。
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
            to="/course/sampling-implementation"
            className="group relative overflow-hidden px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white/70 hover:text-white font-medium transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              上一章：采样实施技术
            </span>
          </Link>

          <Link
            to="/course/quality-control"
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10 flex items-center">
              下一章：质量控制方法
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SamplePreservationPage;