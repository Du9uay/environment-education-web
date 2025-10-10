import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Shield, Droplets, ArrowLeft, ArrowRight } from '../../components/Icons';

const TechnicalSpecificationPage: React.FC = () => {
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
            <FileText className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl font-bold text-white mb-4">污水监测技术规范</h1>
          <p className="text-xl text-white/80">
            《污水监测技术规范》HJ91.1-2019介绍
          </p>
        </motion.div>

        {/* 技术规范的背景和意义 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield className="w-8 h-8 mr-3 text-primary-400" />
            技术规范的背景和意义
          </h3>
          
          <div className="space-y-4 text-white/90">
            <p className="leading-relaxed">
              随着我国水环境治理工作的深入推进，准确、规范的污水监测对于掌握水质状况、评估治理效果至关重要。
              《污水监测技术规范》HJ91.1-2019应运而生，它是为了适应新时期水环境监测需求而制定的重要标准。
            </p>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-water-300 mb-3">出台背景</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-water-400 mr-2">•</span>
                  <span>以往污水监测存在采样不规范、数据可靠性不足等问题</span>
                </li>
                <li className="flex items-start">
                  <span className="text-water-400 mr-2">•</span>
                  <span>统一污水监测的技术要求，保障监测数据的准确性和可比性</span>
                </li>
                <li className="flex items-start">
                  <span className="text-water-400 mr-2">•</span>
                  <span>为水环境管理、污染治理等提供科学依据</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-500/10 border border-primary-400/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-primary-300 mb-3">实际案例</h4>
              <p className="text-white/80">
                在某城市的污水处理厂日常监测中，若不遵循该规范，可能会导致进出水水质监测数据偏差，
                无法真实反映污水处理效果，进而影响对城市水环境质量的正确评估。
              </p>
            </div>
          </div>
        </motion.div>

        {/* 主要技术要求概述 */}
        <motion.div 
          className="glass-card p-8 mb-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <BookOpen className="w-8 h-8 mr-3 text-secondary-400" />
            主要技术要求概述
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-secondary-300 mb-3">总体要求</h4>
              <p className="text-white/80 mb-3">
                明确了污水监测应遵循代表性、规范性、完整性等原则。
              </p>
              <p className="text-sm text-white/60">
                例如：采样必须能代表污水的实际水质情况，不能随意选取采样点。
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-secondary-300 mb-3">采样流程</h4>
              <p className="text-white/80 mb-3">
                规定了采样前的准备、采样过程的操作规范以及采样后的处理等环节。
              </p>
              <p className="text-sm text-white/60">
                例如：采样前要检查采样器具是否完好，采样时要按照规定的步骤进行。
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-secondary-300 mb-3">分析要求</h4>
              <p className="text-white/80 mb-3">
                对水样的实验室分析方法、数据处理等作出了详细规定。
              </p>
              <p className="text-sm text-white/60">
                保障分析结果的可靠性，确保数据的准确性。
              </p>
            </div>
          </div>
        </motion.div>

        {/* 与其他标准的关系 */}
        <motion.div 
          className="glass-card p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Droplets className="w-8 h-8 mr-3 text-water-400" />
            与其他标准的关系
          </h3>
          
          <div className="space-y-4">
            <p className="text-white/90 leading-relaxed">
              HJ91.1-2019与《地表水环境质量标准》《污水综合排放标准》等标准相互关联。
              它为污水监测提供了具体的技术操作规范，而其他标准则从水质质量要求和排放限值等方面对污水进行约束。
            </p>
            
            <div className="bg-water-500/10 border border-water-400/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-water-300 mb-3">应用示例</h4>
              <p className="text-white/80">
                在污水处理厂出水监测中，既要依据HJ91.1-2019规范采样和分析，
                又要对照《污水综合排放标准》判断出水是否达标。
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center p-4 bg-white/5 rounded-lg">
                <FileText className="w-10 h-10 text-primary-400 mr-4" />
                <div>
                  <h5 className="font-semibold text-white">技术操作规范</h5>
                  <p className="text-sm text-white/60">HJ91.1-2019提供具体操作指导</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white/5 rounded-lg">
                <Shield className="w-10 h-10 text-secondary-400 mr-4" />
                <div>
                  <h5 className="font-semibold text-white">质量标准</h5>
                  <p className="text-sm text-white/60">其他标准定义水质要求</p>
                </div>
              </div>
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
            to="/"
            className="group relative overflow-hidden px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white/70 hover:text-white font-medium transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              返回首页
            </span>
          </Link>

          <Link
            to="/course/sampling-points"
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10 flex items-center">
              下一章：采样点位布置
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnicalSpecificationPage;