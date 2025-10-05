import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Monitor, Waves, Network, Droplets } from '../../components/Icons';

const SamplingNotesPage: React.FC = () => {
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
          
          <h1 className="text-4xl font-bold text-white mb-4">采样注意事项</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            污水厂进出水、泵站、管网采样各有注意事项，遵循这些注意事项能保障采样顺利及数据有效
          </p>
        </motion.div>

        {/* 污水厂进出水采样的注意事项 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Monitor className="w-8 h-8 mr-3 text-primary-400" />
            污水厂进出水采样的注意事项
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* 进水采样注意事项 */}
            <div className="bg-primary-500/10 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-primary-300 mb-4 flex items-center">
                <span className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm mr-3">进</span>
                进水采样注意事项
              </h4>
              
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <Droplets className="w-5 h-5 text-primary-400 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">避开杂物堆积处</p>
                    <p className="text-sm text-white/60 mt-1">
                      确保采集到的是均匀的原水
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Droplets className="w-5 h-5 text-primary-400 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">选择合适位置</p>
                    <p className="text-sm text-white/60 mt-1">
                      若污水管网中有大量垃圾堆积，采样点应远离该区域
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Droplets className="w-5 h-5 text-primary-400 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">保证代表性</p>
                    <p className="text-sm text-white/60 mt-1">
                      采集能代表进水整体水质的样品
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* 出水采样注意事项 */}
            <div className="bg-secondary-500/10 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-secondary-300 mb-4 flex items-center">
                <span className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white text-sm mr-3">出</span>
                出水采样注意事项
              </h4>
              
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <Droplets className="w-5 h-5 text-secondary-400 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">工艺稳定运行</p>
                    <p className="text-sm text-white/60 mt-1">
                      在污水处理工艺稳定运行的情况下进行
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Droplets className="w-5 h-5 text-secondary-400 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">避免工艺波动</p>
                    <p className="text-sm text-white/60 mt-1">
                      避免因工艺波动导致水样代表性不足
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Droplets className="w-5 h-5 text-secondary-400 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium">特定工艺要求</p>
                    <p className="text-sm text-white/60 mt-1">
                      如活性污泥法，要在曝气池运行稳定时采集
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 泵站采样的注意事项 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Waves className="w-8 h-8 mr-3 text-water-400" />
            泵站采样的注意事项
          </h3>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-water-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-water-300 mb-3">运行影响</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-water-400 mr-2">•</span>
                    <span>防止水泵运行对水样的扰动</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-water-400 mr-2">•</span>
                    <span>等待水泵运行稳定后再进行采样</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-water-400 mr-2">•</span>
                    <span>避免涡流和气泡影响</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-earth-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-earth-300 mb-3">设备维护</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-earth-400 mr-2">•</span>
                    <span>定期检查泵站采样点的管道情况</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-400 mr-2">•</span>
                    <span>防止管道堵塞影响采样</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-400 mr-2">•</span>
                    <span>保持采样口清洁畅通</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-primary-500/10 border border-primary-400/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-primary-300 mb-3">特别提醒</h4>
              <p className="text-white/80">
                泵站采样时要注意防止水泵运行对水样的扰动，影响水样的代表性。
                在采样前要等待水泵运行稳定后再进行采样，确保水质参数真实可靠。
              </p>
            </div>
          </div>
        </motion.div>

        {/* 管网采样的注意事项 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Network className="w-8 h-8 mr-3 text-secondary-400" />
            管网采样的注意事项
          </h3>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-secondary-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-secondary-300 mb-3">采样点选择</h4>
                <ul className="text-sm text-white/70 space-y-2">
                  <li>• 选择合适的采样点</li>
                  <li>• 避免管网死角</li>
                  <li>• 选择管网直线段</li>
                  <li>• 避开杂物沉积位置</li>
                </ul>
              </div>
              
              <div className="bg-water-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-water-300 mb-3">采样前预处理</h4>
                <ul className="text-sm text-white/70 space-y-2">
                  <li>• 冲洗采样点管道</li>
                  <li>• 用待采水样冲洗2-3次</li>
                  <li>• 排除管道积水</li>
                  <li>• 确保采集实际水样</li>
                </ul>
              </div>
              
              <div className="bg-earth-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-earth-300 mb-3">安全注意</h4>
                <ul className="text-sm text-white/70 space-y-2">
                  <li>• 注意防滑防坠落</li>
                  <li>• 检查井盖安全性</li>
                  <li>• 配备安全装备</li>
                  <li>• 注意有毒气体</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-3">实例说明</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded p-4">
                  <h5 className="font-medium text-water-300 mb-2">位置选择</h5>
                  <p className="text-sm text-white/70">
                    选择管网的直线段进行采样，避免弯头、三通等易产生涡流和沉积的位置
                  </p>
                </div>
                <div className="bg-white/5 rounded p-4">
                  <h5 className="font-medium text-primary-300 mb-2">预处理操作</h5>
                  <p className="text-sm text-white/70">
                    采样前用待采水样冲洗采样点管道2-3次，排除管道中的积水和杂质
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 采样安全总结 */}
        <motion.div 
          className="glass-card p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-yellow-400" />
            采样安全防护要求
          </h3>
          
          <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-6">
            <p className="text-white/90 mb-6">
              采样过程中要注意安全，配备必要的安全防护用品：
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-yellow-300 mb-3">个人防护装备</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center text-white/80">
                    <span className="text-xl mr-2">⛑️</span>
                    <span className="text-sm">安全帽</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <span className="text-xl mr-2">👟</span>
                    <span className="text-sm">防滑鞋</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <span className="text-xl mr-2">🦺</span>
                    <span className="text-sm">救生衣</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <span className="text-xl mr-2">🧤</span>
                    <span className="text-sm">防护手套</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-yellow-300 mb-3">特殊场景防护</h4>
                <ul className="text-sm text-white/80 space-y-1">
                  <li>• 泵站采样：防触电措施</li>
                  <li>• 管网采样：防坠落装备</li>
                  <li>• 密闭空间：气体检测仪</li>
                  <li>• 深水采样：救生设备</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-yellow-300 mb-3">应急准备</h4>
                <ul className="text-sm text-white/80 space-y-1">
                  <li>• 急救包配备</li>
                  <li>• 紧急联系方式</li>
                  <li>• 应急预案熟悉</li>
                  <li>• 团队作业原则</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SamplingNotesPage;