import React from 'react';
import { motion } from 'framer-motion';
import { FileText, TestTube, Beaker, Droplets, Shield } from '../../components/Icons';

const SamplingImplementationPage: React.FC = () => {
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
            <Beaker className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">采样实施技术</h1>
          <p className="text-xl text-white/80">
            水质样品采样的规范操作流程
          </p>
        </motion.div>

        {/* 制作采样方案 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <FileText className="w-8 h-8 mr-3 text-primary-400" />
            制作采样方案
          </h3>
          
          <div className="space-y-6">
            <p className="text-white/90 leading-relaxed">
              采样方案的制作是采样工作的前提。首先要明确采样的目的，比如是为了监测污水处理厂进出水水质、
              泵站运行对水质的影响还是管网水质情况等。
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary-300 mb-4">方案要素</h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">1.</span>
                    <div>
                      <strong>采样点位确定</strong>
                      <p className="text-sm text-white/60 mt-1">按照进出水采样点布置要求</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">2.</span>
                    <div>
                      <strong>采样时间安排</strong>
                      <p className="text-sm text-white/60 mt-1">定时采样或根据排放规律</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-400 mr-2">3.</span>
                    <div>
                      <strong>采样项目确定</strong>
                      <p className="text-sm text-white/60 mt-1">COD、氨氮、总磷等指标</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-water-300 mb-4">方案示例</h4>
                <div className="bg-white/5 rounded p-4 space-y-2 text-sm text-white/80">
                  <p><strong>采样地点：</strong>某污水处理厂</p>
                  <p><strong>采样时间：</strong>每周一、三、五上午9点</p>
                  <p><strong>采样点位：</strong>进水口、出水口</p>
                  <p><strong>检测项目：</strong>COD、氨氮、总磷、pH值</p>
                  <p><strong>采样方式：</strong>瞬时采样/混合采样</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 采样器材和现场测试仪器的准备 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <TestTube className="w-8 h-8 mr-3 text-secondary-400" />
            采样器材和现场测试仪器的准备
          </h3>
          
          <div className="space-y-6">
            {/* 主要采样器材 */}
            <div>
              <h4 className="text-xl font-semibold text-secondary-300 mb-4">主要采样器材</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-secondary-500/10 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">采样器具</h5>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• 聚乙烯瓶</li>
                    <li>• 硬质玻璃瓶</li>
                    <li>• 虹吸采样器</li>
                    <li>• 泵式采样器</li>
                  </ul>
                </div>
                
                <div className="bg-secondary-500/10 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">样品容器</h5>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• 重金属：聚乙烯瓶</li>
                    <li>• 有机物：玻璃瓶</li>
                    <li>• 微生物：无菌瓶</li>
                    <li>• 易氧化物：密封瓶</li>
                  </ul>
                </div>
                
                <div className="bg-secondary-500/10 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">辅助用品</h5>
                  <ul className="text-sm text-white/70 space-y-1">
                    <li>• 保存剂</li>
                    <li>• 样品箱</li>
                    <li>• 冷藏箱</li>
                    <li>• 记录表格、标签</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* 准备注意点 */}
            <div className="bg-earth-500/10 border border-earth-400/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-earth-300 mb-4">准备采样器材的注意点</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-earth-400 mr-2">✓</span>
                    <span>具有良好的化学稳定性</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-400 mr-2">✓</span>
                    <span>材质选择合适（聚乙烯、不锈钢等）</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="text-earth-400 mr-2">✓</span>
                    <span>表面光滑，避免吸附</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-earth-400 mr-2">✓</span>
                    <span>足够的硬度与机械强度</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 采样执行 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Droplets className="w-8 h-8 mr-3 text-water-400" />
            采样执行
          </h3>
          
          <div className="space-y-6">
            {/* 采样方式 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-water-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-water-300 mb-3">瞬时采样</h4>
                <p className="text-white/80 mb-3">适用场景：</p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• 污染物性质不稳定</li>
                  <li>• 间歇排放的污水</li>
                  <li>• 需要考察特定时间的浓度</li>
                  <li>• 获取污染物最高值或最低值</li>
                </ul>
              </div>
              
              <div className="bg-water-500/10 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-water-300 mb-3">混合采样</h4>
                <p className="text-white/80 mb-3">适用场景：</p>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• 计算平均污染物浓度</li>
                  <li>• 计算污染物质量负荷</li>
                  <li>• 污水特征变化大</li>
                  <li>• 24h混合样，计算日均值</li>
                </ul>
              </div>
            </div>
            
            {/* 采样步骤 */}
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">采样步骤</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm mr-3">1</span>
                  <div className="flex-1">
                    <p className="text-white/90">采样前检查器具完整性</p>
                    <p className="text-sm text-white/60 mt-1">检查采样瓶是否有裂缝，管道是否通畅</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm mr-3">2</span>
                  <div className="flex-1">
                    <p className="text-white/90">水样荡涤容器2-3次</p>
                    <p className="text-sm text-white/60 mt-1">防止容器内壁残留物质影响水样成分</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm mr-3">3</span>
                  <div className="flex-1">
                    <p className="text-white/90">去除水面杂物，避免搅动底泥</p>
                    <p className="text-sm text-white/60 mt-1">确保采集水样的代表性</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm mr-3">4</span>
                  <div className="flex-1">
                    <p className="text-white/90">贴标签与记录</p>
                    <p className="text-sm text-white/60 mt-1">注明采样点位、时间、采样人等信息</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 采样安全 */}
        <motion.div 
          className="glass-card p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-yellow-400" />
            采样安全
          </h3>
          
          <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-6">
            <p className="text-white/90 mb-4">
              采样过程中要注意安全，配备必要的安全防护用品：
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">⛑️</span>
                <span className="text-white/80">安全帽</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">👟</span>
                <span className="text-white/80">防滑鞋</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🦺</span>
                <span className="text-white/80">救生衣</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🧤</span>
                <span className="text-white/80">防护手套</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">😷</span>
                <span className="text-white/80">防护口罩</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">🥽</span>
                <span className="text-white/80">护目镜</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SamplingImplementationPage;