import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Droplets, Monitor, Waves, ArrowLeft, ArrowRight } from '../../components/Icons';

const SamplingPointsPage: React.FC = () => {
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
            <Target className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">采样点位布置</h1>
          <p className="text-xl text-white/80">
            污水监测采样点位的科学布置方法
          </p>
        </motion.div>

        {/* 污水处理厂进出水采样点的布置 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Monitor className="w-8 h-8 mr-3 text-primary-400" />
            污水处理厂进出水采样点的布置
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 进水采样点 */}
            <div className="bg-primary-500/10 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-primary-300 mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm mr-3">进</span>
                进水采样点
              </h4>
              
              <div className="space-y-4 text-white/80">
                <p>
                  根据HJ91.1-2019要求，污水处理厂进水采样点应设置在
                  <span className="text-primary-300 font-semibold"> 污水处理设施进水口处</span>，
                  且要确保能采集到未经处理的原水。
                </p>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">实例说明</h5>
                  <p className="text-sm">
                    某大型污水处理厂的进水采样点设置在厂区外的污水管网接入处，
                    此处水流稳定，能代表进入污水处理厂的原水水质。
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">注意事项</h5>
                  <ul className="text-sm space-y-1">
                    <li>• 避开可能的污染源干扰</li>
                    <li>• 保证采样点的代表性</li>
                    <li>• 确保采集到未处理的原水</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* 出水采样点 */}
            <div className="bg-secondary-500/10 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-secondary-300 mb-4 flex items-center">
                <span className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white text-sm mr-3">出</span>
                出水采样点
              </h4>
              
              <div className="space-y-4 text-white/80">
                <p>
                  出水采样点应设置在
                  <span className="text-secondary-300 font-semibold"> 污水处理设施的出水口处</span>，
                  用于监测经过处理后的水质。
                </p>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">实例说明</h5>
                  <p className="text-sm">
                    某采用活性污泥法处理污水的厂，出水采样点设置在二沉池的出水口，
                    此处能准确反映经过生物处理后的水质状况。
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">要求</h5>
                  <ul className="text-sm space-y-1">
                    <li>• 考虑污水处理工艺的最终排放情况</li>
                    <li>• 设置在排放口的固定位置</li>
                    <li>• 满足监测项目全面的要求</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 泵站采样点的布置 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Waves className="w-8 h-8 mr-3 text-water-400" />
            泵站采样点的布置
          </h3>
          
          <div className="space-y-6">
            <p className="text-white/90 leading-relaxed">
              泵站采样点的布置需考虑泵站对污水的提升作用可能带来的水质变化。
              应设置在泵站的进水口和出水口处。
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-water-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-water-300 mb-3">进水口采样点</h4>
                <p className="text-white/80 mb-3">
                  用于监测进入泵站前的污水水质
                </p>
                <div className="bg-white/5 rounded p-3">
                  <p className="text-sm text-white/70">
                    设置在泵站前的污水管道上
                  </p>
                </div>
              </div>
              
              <div className="bg-water-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-water-300 mb-3">出水口采样点</h4>
                <p className="text-white/80 mb-3">
                  用于监测经过泵站提升后的污水水质
                </p>
                <div className="bg-white/5 rounded p-3">
                  <p className="text-sm text-white/70">
                    设置在泵站的出水管上
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-earth-500/10 border border-earth-400/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-earth-300 mb-3">布置要点</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start">
                  <Droplets className="w-5 h-5 text-earth-400 mr-2 mt-0.5" />
                  <span>避免泵站运行过程中对水样的二次污染</span>
                </li>
                <li className="flex items-start">
                  <Droplets className="w-5 h-5 text-earth-400 mr-2 mt-0.5" />
                  <span>确保采样点能真实反映污水在泵站前后的水质情况</span>
                </li>
                <li className="flex items-start">
                  <Droplets className="w-5 h-5 text-earth-400 mr-2 mt-0.5" />
                  <span>考虑泵站对污水的提升作用可能带来的水质变化</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 采样点位布置原则总结 */}
        <motion.div 
          className="glass-card p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">采样点位布置原则总结</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">代</span>
              </div>
              <h4 className="font-semibold text-white mb-2">代表性原则</h4>
              <p className="text-sm text-white/70">
                采样点能代表污水实际水质情况
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-secondary-500/20 to-secondary-600/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">规</span>
              </div>
              <h4 className="font-semibold text-white mb-2">规范性原则</h4>
              <p className="text-sm text-white/70">
                按照HJ91.1-2019要求设置
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-water-500/20 to-water-600/10 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-water-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">完</span>
              </div>
              <h4 className="font-semibold text-white mb-2">完整性原则</h4>
              <p className="text-sm text-white/70">
                覆盖所有关键监测点位
              </p>
            </div>
          </div>
        </motion.div>

        {/* 章节导航按钮 */}
        <motion.div
          className="flex justify-between items-center pt-12 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            to="/course/technical-specification"
            className="group relative overflow-hidden px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white/70 hover:text-white font-medium transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              上一章：污水监测技术规范
            </span>
          </Link>

          <Link
            to="/course/sampling-implementation"
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10 flex items-center">
              下一章：采样实施技术
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SamplingPointsPage;