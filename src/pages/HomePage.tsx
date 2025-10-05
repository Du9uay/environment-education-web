import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { Droplets, Users, Award, Target, Network, Camera, Film, Edit3, TrendingUp, Lightbulb, ChevronRight, Building2, Briefcase, Trophy, Sparkles, GPT, N8N, CheckCircle, TestTube, Microscope } from '../components/Icons';
import DigitalAvatarPlayer from '../components/DigitalAvatarPlayer';

const HomePage: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const fullText = '水质样品的采样与保存';
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  // 职业发展数据
  const careerPositions = [
    {
      title: '水环境监测员',
      description: '负责地表水、地下水及废水样品的规范采集与保存，确保样品代表性并符合标准要求。',
      icon: Droplets,
      color: 'from-primary-500 to-primary-600',
      responsibilities: [
        { text: '负责地表水、地下水及废水样品的规范采集与保存，确保样品代表性并符合《水质采样技术指导》标准要求。', highlighted: true },
        { text: '操作多参数水质检测仪现场测定pH、溶解氧、浊度等指标，实时记录数据并识别异常波动。', highlighted: true },
        { text: '按规程采集大气、噪声及土壤样品，熟练掌握烟气采样器、声级计等设备的校准与操作。', highlighted: false },
        { text: '管理样品运输链，确保低温保存、防震措施及时效性，避免样品性质变化影响检测结果。', highlighted: false },
        { text: '编制采样记录单与现场监测报告，通过LIMS系统上传数据并协助实验室对接。', highlighted: false },
        { text: '维护采样设备（如水质采样器、气体捕集装置），定期更换耗材并填写保养日志。', highlighted: false },
        { text: '适应高空、高温、水域等特殊环境作业，严格执行安全规范（如防毒面具佩戴、救生衣穿戴）。', highlighted: false }
      ]
    },
    {
      title: '水质检测技术员',
      description: '进行水样实验室分析，操作检测设备，确保检测数据的准确性和可靠性。',
      icon: TestTube,
      color: 'from-secondary-500 to-secondary-600',
      responsibilities: [
        { text: '进行水样实验室预处理（过滤、消解、萃取等），确保符合不同检测项目的前处理标准。', highlighted: true },
        { text: '操作分光光度计、原子吸收仪等设备检测COD、氨氮、重金属等指标，控制相对偏差≤5%。', highlighted: false },
        { text: '配制标准溶液与实验试剂，定期校准曲线并验证仪器精度（如每日零点核查）。', highlighted: true },
        { text: '按《水和废水监测分析方法》审核检测数据，识别异常值并启动复测流程。', highlighted: false },
        { text: '管理实验室质控样品（空白/平行/加标样），确保每批次数据通过质控验收。', highlighted: false },
        { text: '编制检测报告并归档原始记录，符合CMA认证对数据可追溯性的要求。', highlighted: true },
        { text: '处置实验室危废液（含铬/汞废液），执行中和、固化等安全处理程序。', highlighted: false }
      ]
    },
    {
      title: '污水处理厂采样员',
      description: '专门负责污水处理厂的采样工作，监控处理工艺并协助工艺优化。',
      icon: Microscope,
      color: 'from-water-500 to-water-600',
      responsibilities: [
        { text: '监控污水处理工艺段（生化池/二沉池/出水口），按频次采集工艺控制样并记录工况参数。', highlighted: true },
        { text: '执行污泥含水率、沉降比等生产指标检测，指导脱水机房调整絮凝剂投加量。', highlighted: false },
        { text: '操作在线监测仪比对采样，校准传感器偏差并上报数据异常（如NH₃-N突变）。', highlighted: false },
        { text: '采集污染源应急样（如事故溢流废水），快速锁定特征污染物并协助溯源。', highlighted: true },
        { text: '管理厂区采样点位图与采样计划，确保覆盖所有风险管控单元（含危废暂存区）。', highlighted: false },
        { text: '维护无菌采样容器及冷藏设备，防止交叉污染与样品变质。', highlighted: false },
        { text: '配合环保督察采样任务，提供完整工艺运行日志及加药记录。', highlighted: false }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  // 打字机效果
  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [textIndex, fullText]);

  // 滚动动画控制
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);


  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 主标题区域 - 带动画 */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ y }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-[color:var(--accent-sand-500)] rounded-full mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 
            }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 360,
              transition: { duration: 0.3 }
            }}
          >
            <Droplets className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 className="text-5xl font-bold text-base-50 mb-6 leading-tight">
            <span className="inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-white"
              >
                |
              </motion.span>
            </span>
            <motion.span 
              className="block text-2xl font-normal text-white mt-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
            >
              环保检验检测专业核心课程
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-base-50/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            掌握《污水监测技术规范》HJ91.1-2019核心要义，学习水质样品采样、保存、运输全流程操作技能，
            培养具备污水监测、样品采集、质量控制和现场检测能力的环保技术人才。
          </motion.p>
        </motion.div>

        {/* 新增大标题：为什么要学习这节课 */}
        <motion.section
          className="mb-16 text-center relative overflow-visible"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* 数字人播放器 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYqXCNXyowr.mov"
            position={{ top: 16, right: '-16rem' }}
          />

          <motion.h1
            className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[color:var(--gold-cinema)] via-[color:var(--gold-warm)] to-[color:var(--accent-sand-500)] bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            为什么要学习这门课
          </motion.h1>
          <motion.p
            className="text-lg text-[color:var(--text-cinema-muted)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            绿色转型浪潮来临,环保检测正成为"数据即决策"的黄金赛道
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.section>

        {/* 第一部分：为什么要关注行业 */}
        <motion.section
          className="mb-20 relative overflow-visible"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 数字人播放器 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYJjY0BWdlQ.mov"
            position={{ top: 16, right: '-16rem' }}
          />

          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-[color:var(--bg-cinema-dark)]" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要关注行业</h2>
              <p className="text-[color:var(--gold-warm)] mt-2">绿色转型浪潮来临，环保检测正成为"数据即决策"的黄金赛道</p>
            </div>
          </motion.div>

          {/* 主内容区 - 大卡片 */}
          <motion.div
            className="glass-cinema p-12 relative overflow-hidden mb-8"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/一、为什么要关注行业_背景图.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 装饰性背景元素 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--gold-cinema)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[color:var(--accent-sand-500)]/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              {/* 原因与现状 - 全宽展示 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-[color:var(--gold-cinema)]">原因与现状</span>
                </h3>

                {/* 四个核心数据点 */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {/* 千亿级市场规模 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--gold-cinema)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要关注行业_原因与现状_政策驱动_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="w-8 h-8 text-[color:var(--gold-cinema)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">政策驱动</h4>
                    <p className="text-[color:var(--text-cinema-secondary)] text-sm">
                      随着<span className="font-bold text-[color:var(--gold-warm)]">"绿水青山就是金山银山"</span>理念深入人心，国家对生态环境保护的投入与监管力度持续升级。各地政府加快建设污水处理厂、监测站和生态修复工程，环保检测行业迎来了政策红利与市场双重驱动的<span className="font-bold text-[color:var(--gold-warm)]">发展黄金期</span>
                    </p>
                  </motion.div>

                  {/* 技术迭代 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--gold-cinema)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要关注行业_原因与现状_市场扩张_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Building2 className="w-8 h-8 text-[color:var(--gold-cinema)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">全球趋势</h4>
                    <p className="text-[color:var(--text-cinema-secondary)] text-sm">
                      环保已成为全球共识，国际社会对<span className="font-bold text-[color:var(--gold-cinema)]">环境检测</span>与<span className="font-bold text-[color:var(--gold-cinema)]">治理技术</span>的要求日趋严格。我国正加速与国际标准接轨，推动检测体系全面升级，这不仅提升了行业门槛，也催生了对<span className="font-bold text-[color:var(--gold-cinema)]">高素质技术人才</span>的<span className="font-bold text-[color:var(--gold-cinema)]">巨大需求</span>
                    </p>
                  </motion.div>

                  {/* 需求广泛 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--gold-cinema)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要关注行业_原因与现状_技术跃迁_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Film className="w-8 h-8 text-[color:var(--gold-cinema)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">岗位紧缺</h4>
                    <p className="text-[color:var(--text-cinema-secondary)] text-sm">
                      尽管行业规模迅速扩大，但企业普遍面临"<span className="font-bold text-[color:var(--gold-cinema)]">岗位多</span>、<span className="font-bold text-[color:var(--gold-cinema)]">能上手的人少</span>"的困境。掌握<span className="font-bold text-[color:var(--gold-cinema)]">规范采样与检测技术</span>的专业人才<span className="font-bold text-[color:var(--gold-cinema)]">极为稀缺</span>，一个合格的水质采样员起薪可达<span className="font-bold text-[color:var(--gold-cinema)]">7–8k</span>，经验积累后月薪<span className="font-bold text-[color:var(--gold-cinema)]">轻松过万</span>，职业前景稳定而可观
                    </p>
                  </motion.div>

                  {/* 职业机遇 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-6 border border-[color:var(--gold-cinema)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要关注行业_原因与现状_标准趋严_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Network className="w-8 h-8 text-[color:var(--gold-cinema)] mb-3" />
                    <h4 className="text-lg font-bold text-white mb-2">潜力无限</h4>
                    <p className="text-[color:var(--text-cinema-secondary)] text-sm">
                      环保检测看似普通，却是支撑环境治理与政策决策的<span className="text-[color:var(--gold-cinema)] font-bold">关键环节</span>。每一次准确的采样与分析，都关系到生态评估、治理效果和公共安全，是守护生态环境、推动绿色发展的技术基石与社会价值体现
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* 结果导向 - 分为两列 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6">
                  <span className="text-[color:var(--gold-warm)]">结果导向</span>
                </h3>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* 对企业而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-[color:var(--gold-cinema)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要关注行业_结果导向_对企业而言_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Target className="w-10 h-10 text-[color:var(--gold-cinema)] mr-3" />
                      <h4 className="text-2xl font-bold text-[color:var(--gold-cinema)]">对企业来说</h4>
                    </div>
                    <p className="text-[color:var(--text-cinema-primary)] text-lg leading-relaxed">
                      精准的环保数据能够确保企业合规，<span className="font-bold text-[color:var(--gold-cinema)]">避免罚款和法律风险</span>。同时，通过细化监测和数据分析，从而实现成本降低和效益提升，为长期可持续发展奠定基础。
                    </p>
                  </motion.div>

                  {/* 对学生而言 */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl p-8 border border-[color:var(--gold-cinema)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要关注行业_结果导向_对个人而言_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, borderColor: "rgba(255, 215, 0, 0.5)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center mb-4">
                      <Users className="w-10 h-10 text-[color:var(--gold-cinema)] mr-3" />
                      <h4 className="text-2xl font-bold text-[color:var(--gold-cinema)]">对学生来说</h4>
                    </div>
                    <p className="text-[color:var(--text-cinema-primary)] text-lg leading-relaxed">
                      通过掌握行业标准化的环保检测技能，学生可以快速成为企业急需的实战型人才，能够在职场中能够<span className="font-bold text-[color:var(--gold-cinema)]">获得更快的晋升机会和更高的薪资待遇</span>。
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* 第二部分：为什么要分清企业类型 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-2xl mr-6">
              <TrendingUp className="w-8 h-8 text-[color:var(--bg-cinema-dark)]" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">为什么要分清企业类型？</h2>
              <p className="text-[color:var(--gold-warm)] mt-2">理解产业链和企业分工，才能精准定位个人成长路径</p>
            </div>
          </motion.div>

          {/* 主内容区 - 阶梯式企业类型布局 */}
          <div className="relative max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* 上游企业 */}
              <motion.div
                className="relative max-w-3xl mr-auto ml-0"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Building2 className="w-12 h-12 text-[color:var(--bg-cinema-dark)]" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--gold-cinema)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要分清企业类型_上游企业_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--gold-cinema)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--gold-cinema)]">上游企业</h3>
                        <span className="text-[color:var(--gold-cinema)]/60 text-sm font-semibold">基础资源</span>
                      </div>
                      <p className="text-[color:var(--text-cinema-secondary)] text-base mb-6">主要提供环保检测所需的"硬件"与"基础条件"，相当于资源型和服务型供应商</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">仪器设备供应商</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">试剂耗材公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">检测实验室设施建设公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">数据管理系统公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">采样器具与传感器提供商</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <ChevronRight className="w-10 h-10 text-[color:var(--gold-cinema)]/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 中游企业 */}
              <motion.div
                className="relative max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: -5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Camera className="w-12 h-12 text-[color:var(--bg-cinema-dark)]" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--gold-cinema)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要分清企业类型_中游企业_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--gold-cinema)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--gold-cinema)]">中游企业</h3>
                        <span className="text-[color:var(--gold-cinema)]/60 text-sm font-semibold">检测服务</span>
                      </div>
                      <p className="text-[color:var(--text-cinema-secondary)] text-base mb-6">核心是检测服务的组织方与统筹方，即负责把上游资源整合起来并提供完整的环保检测服务</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">第三方检测机构</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">环保咨询与合规公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">环境监测项目承包方</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">数据分析与报告编制公司</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">在线监测服务提供商</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 向下的流动箭头 */}
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                  >
                    <ChevronRight className="w-10 h-10 text-[color:var(--gold-cinema)]/50 rotate-90" />
                  </motion.div>
                </div>
              </motion.div>

              {/* 下游企业 */}
              <motion.div
                className="relative max-w-3xl ml-auto mr-0"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-6">
                  {/* 左侧大图标 */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-3xl flex items-center justify-center shadow-2xl"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Users className="w-12 h-12 text-[color:var(--bg-cinema-dark)]" />
                    </motion.div>
                  </div>

                  {/* 右侧内容卡片 */}
                  <motion.div
                    className="flex-1 relative overflow-hidden rounded-3xl p-8 border border-[color:var(--gold-cinema)]/30"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/为什么要分清企业类型_下游企业_背景图.jpg')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    whileHover={{ scale: 1.02, x: -10 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[color:var(--gold-cinema)]/20 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-[color:var(--gold-cinema)]">下游企业</h3>
                        <span className="text-[color:var(--gold-cinema)]/60 text-sm font-semibold">合规决策</span>
                      </div>
                      <p className="text-[color:var(--text-cinema-secondary)] text-base mb-6">面向最终的企业客户和政府监管单位，直接创造环境合规价值与决策支持</p>

                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">工业园区与企业环保部门</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">政府环境监管机构</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">投资与保险机构</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">环境责任保险</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[color:var(--gold-cinema)] rounded-full animate-pulse"></div>
                          <span className="text-[color:var(--text-cinema-muted)] text-sm">客户服务与技术支持公司</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-[color:var(--gold-cinema)]/10 to-[color:var(--gold-warm)]/10 rounded-2xl border border-[color:var(--gold-cinema)]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[color:var(--gold-cinema)] text-lg font-semibold text-center">
              上下游不同，掌握的技术不同，要明晰个人定位，选择最适合自己的职业发展方向
            </p>
          </motion.div>
        </motion.section>

        {/* 第三部分：关于岗位你该知道的是 */}
        <motion.section
          className="mb-20 relative overflow-visible"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 数字人播放器 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYJjY0B9jlT.mov"
            position={{ top: 16, right: '-16rem' }}
          />

          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-2xl mr-6">
              <Briefcase className="w-8 h-8 text-[color:var(--bg-cinema-dark)]" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">关于岗位你该知道的是</h2>
              <p className="text-[color:var(--gold-warm)] mt-2">有哪些岗位？普遍要求与待遇如何？</p>
            </div>
          </motion.div>

          {/* 岗位分类卡片 */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {/* 前期策划 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/关于岗位你该知道的是_项目咨询与管理_背景图.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--gold-cinema)] rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-[color:var(--bg-cinema-dark)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--gold-cinema)] ml-3">项目咨询管理</h3>
                </div>
                <p className="text-[color:var(--text-cinema-muted)] text-sm mb-4">把数据变成结论，面向治理、合规与投资决策</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">项目经理</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">报告主审</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">环保咨询师</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">ESG工程师</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 中期拍摄 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/关于岗位你该知道的是_采样与现场执行_背景图.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--gold-cinema)] rounded-xl flex items-center justify-center">
                    <Camera className="w-5 h-5 text-[color:var(--bg-cinema-dark)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--gold-cinema)] ml-3">现场采样</h3>
                </div>
                <p className="text-[color:var(--text-cinema-muted)] text-sm mb-4">负责踏勘、布点、采样与现场质控，直连数据源头</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">水质采样员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">废气采样员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">土壤采样员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">噪声监测员</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 后期制作 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/关于岗位你该知道的是_实验室检测与质量控制_背景图.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--gold-cinema)] rounded-xl flex items-center justify-center">
                    <Edit3 className="w-5 h-5 text-[color:var(--bg-cinema-dark)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--gold-cinema)] ml-3">实验室检测</h3>
                </div>
                <p className="text-[color:var(--text-cinema-muted)] text-sm mb-4">承担前处理与仪器分析，落实质量控制与技术审核</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">色谱/质谱分析员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">理化分析员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">微生物检测员</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 宣传运营 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl p-6 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/关于岗位你该知道的是_实验室检测与质量控制_背景图.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[color:var(--gold-cinema)] rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-[color:var(--bg-cinema-dark)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[color:var(--gold-cinema)] ml-3">质量控制</h3>
                </div>
                <p className="text-[color:var(--text-cinema-muted)] text-sm mb-4">建立"从现场到报告"全链条质量保障体系</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">体系审核员</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">质量主管</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-[color:var(--gold-cinema)]" />
                    <span className="text-[color:var(--text-cinema-secondary)] text-sm">现场质量监督员</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 普遍要求与待遇 */}
          <motion.div
            className="glass-cinema p-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[color:var(--gold-cinema)]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-6 text-center">行业要求与待遇</h3>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--gold-cinema)]/20 to-[color:var(--gold-warm)]/20 border border-[color:var(--gold-cinema)]/30">
                  <div className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-2">技术/经验 &gt; 学历</div>
                  <p className="text-[color:var(--text-cinema-muted)] text-sm">门槛要求：技术/经验要求＞学历要求</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--gold-cinema)]/20 to-[color:var(--gold-warm)]/20 border border-[color:var(--gold-cinema)]/30">
                  <div className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-2">核心能力</div>
                  <p className="text-[color:var(--text-cinema-muted)] text-sm">标准理解、SOP执行、记录完整与风险意识</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--gold-cinema)]/20 to-[color:var(--gold-warm)]/20 border border-[color:var(--gold-cinema)]/30">
                  <div className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-2">证书加分</div>
                  <p className="text-[color:var(--text-cinema-muted)] text-sm">检验员、计量内审、危化安全、无人机与RTK</p>
                </div>

                <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-[color:var(--gold-cinema)]/20 to-[color:var(--gold-warm)]/20 border border-[color:var(--gold-cinema)]/30">
                  <div className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-2">6K–7K</div>
                  <p className="text-[color:var(--text-cinema-muted)] text-sm">采样/分析岗入职6–7k，成长快</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 第四部分：通过学习，你能学到什么 */}
        <motion.section
          className="mb-20 relative overflow-visible"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 数字人播放器 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYJjY0B5Zoy.mov"
            position={{ top: 16, right: '-16rem' }}
          />

          {/* 章节标题 */}
          <motion.div
            className="flex items-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[color:var(--gold-cinema)] to-[color:var(--gold-warm)] rounded-2xl mr-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">通过学习，你能学到什么？</h2>
              <p className="text-[color:var(--gold-warm)] mt-2">掌握实战技能，快速应对行业挑战，开启职业新篇章！</p>
            </div>
          </motion.div>

          {/* 主内容区 - 课程大纲和技能 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* 课程核心内容卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--gold-cinema)]/10 to-cyan-600/10 p-8 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/标题三_浓缩十余年的核心经验_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--gold-cinema)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--gold-cinema)]">核心课程内容</h3>
                </div>

                <div className="space-y-4">
                  {/* 基础采样技巧 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--gold-cinema)] font-semibold text-base">基础采样技巧</span>
                    <div className="text-[color:var(--text-cinema-muted)] text-sm mt-2 space-y-1">
                      <p>• 水质样品的采样与保存技巧（1节）</p>
                      <p>• 大气样品采集与分析前准备（1节）</p>
                      <p>• 土壤样品采集与制备实战指南（1节）</p>
                      <p>• 固体废弃物采样与分样技巧全攻略（1节）</p>
                    </div>
                  </div>

                  {/* 专业检验方法 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--gold-cinema)] font-semibold text-base">专业检验方法</span>
                    <div className="text-[color:var(--text-cinema-muted)] text-sm mt-2 space-y-1">
                      <p>• 生物样品采集与保存的核心流程（2节）</p>
                      <p>• 理化检验精准取样操作秘笈（2节）</p>
                      <p>• 生物检验标准化取样流程深度解析（3节）</p>
                    </div>
                  </div>

                  {/* 现场采样与快速检测 */}
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <span className="text-[color:var(--gold-cinema)] font-semibold text-base">现场采样与快速检测</span>
                    <div className="text-[color:var(--text-cinema-muted)] text-sm mt-2 space-y-1">
                      <p>• 环境样品现场快速检测与操作指南（1节）</p>
                      <p>• 应对特殊环境的检验取样方法（1节）</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 实战技能卡片 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--gold-warm)]/10 to-[color:var(--gold-cinema)]/10 p-8 border border-[color:var(--gold-warm)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/通过学习，你能学到什么_本节课课程内容_背景图.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--gold-warm)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--gold-warm)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--gold-warm)]">本节课课程内容</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="w-5 h-5 text-[color:var(--gold-warm)]" />
                      <span className="text-[color:var(--gold-warm)] font-semibold text-base">如何正确选择水质采样点</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-muted)] text-sm">学习污水处理厂进出水、泵站、管网采样点的科学布置方法</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-5 h-5 text-[color:var(--gold-warm)]" />
                      <span className="text-[color:var(--gold-warm)] font-semibold text-base">水质样品的保存方法与温控要求</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-muted)] text-sm">掌握样品保存方式、运输条件控制、交接规范流程</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-5 h-5 text-[color:var(--gold-warm)]" />
                      <span className="text-[color:var(--gold-warm)] font-semibold text-base">常见水质采样误区及解决方案</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-muted)] text-sm">了解采样中的常见错误，学习规避方法和纠正措施</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Sparkles className="w-5 h-5 text-[color:var(--gold-warm)]" />
                      <span className="text-[color:var(--gold-warm)] font-semibold text-base">水质采样后的处理与分析前准备工作</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-muted)] text-sm">掌握样品交接、标识、预处理等关键环节</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-[color:var(--gold-warm)]" />
                      <span className="text-[color:var(--gold-warm)] font-semibold text-base">使用现代化工具提升采样效率和准确性</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-muted)] text-sm">学习使用自动采样器、GPS定位等现代化工具</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 案例分析和工具应用 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 涉及到的大型案例 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--gold-cinema)]/10 to-[color:var(--gold-warm)]/10 p-8 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/通过学习，你能学到什么_涉及到的大型案例_背景图.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--gold-cinema)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--gold-cinema)]">涉及到的大型案例</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">24小时恒温自动连续采样检测方式解析</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-muted)] text-sm">全天候自动化采样系统的操作与质量控制技术</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">苯、甲苯、二甲苯及总挥发性有机物的检测项目</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-muted)] text-sm">挥发性有机物采样与保存的关键技术要点</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">汽车内饰件 VOC 检测项目</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-muted)] text-sm">车内空气质量检测的采样方法与标准操作流程</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <Trophy className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">放射性氡等辐射物质检测项目</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-muted)] text-sm">放射性物质采样的安全防护与专业操作规范</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 涉及到 AI 工具教学 */}
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[color:var(--gold-cinema)]/10 to-[color:var(--gold-warm)]/10 p-8 border border-[color:var(--gold-cinema)]/30"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('${process.env.PUBLIC_URL}/images/为什么要学习这门课/标题三_前沿的AI工具_背景图.jpeg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--gold-cinema)]/20 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-3 h-12 bg-[color:var(--gold-cinema)] rounded-full mr-4"></div>
                  <h3 className="text-2xl font-bold text-[color:var(--gold-cinema)]">涉及到 AI 工具教学</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <GPT className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">ChatGPT</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-secondary)] text-sm mt-1">采样方案初稿撰写、风险预案评估与报告润色</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <N8N className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">N8N</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-secondary)] text-sm mt-1">采样计划派工、消息提醒、进度与质控节点自动化</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Network className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">LabWare LIMS</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-secondary)] text-sm mt-1">用于管理水质样品的采集、保存与分析数据。该工具确保样品的追溯性、数据一致性，并提高了实验室的工作效率</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">Thermo Fisher SampleManager</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-secondary)] text-sm mt-1">帮助实验室实现水质样品的全程追踪与监控，确保样品的质量与完整性，减少人为错误</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-[color:var(--gold-cinema)]" />
                      <span className="text-[color:var(--gold-cinema)] font-semibold text-base">HORIBA LAQUA</span>
                    </div>
                    <p className="text-[color:var(--text-cinema-secondary)] text-sm mt-1">智能水质分析工具，通过实时传感器与AI分析相结合，提供精准的水质数据，帮助采样员及时调整采样方法和存储条件</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 职业发展：岗位介绍 */}
        <motion.section className="mb-20 relative overflow-visible" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          {/* 数字人播放器 */}
          <DigitalAvatarPlayer
            videoUrl="https://ddcz-1315997005.cos.ap-nanjing.myqcloud.com/static/video/web_teach/recuYJjY0BNRQr.mov"
            position={{ top: 16, right: '-16rem' }}
          />

          {/* 章节标题 */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-water-500 rounded-full mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3
              }}
              viewport={{ once: true }}
            >
              <Users className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-4xl font-bold text-white mb-4">职业发展</h2>
            <h3 className="text-2xl font-semibold text-water-200 mb-6">本单元涉及的岗位</h3>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              了解水质监测相关职业岗位，明确各岗位职责要求和技能需求，
              为学生职业规划和就业方向提供指导。
            </p>
          </motion.div>

          {/* 岗位介绍卡片 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {careerPositions.map((position, index) => {
              const Icon = position.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-8 group"
                  whileHover={{
                    scale: 1.02,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }
                  }}
                >
                  <div className="flex flex-col gap-6">
                    {/* 上方岗位信息 */}
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${position.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white group-hover:text-primary-200 transition-colors leading-tight mb-3">
                          {position.title}
                        </h3>
                        <p className="text-white/80 text-base leading-relaxed">
                          {position.description}
                        </p>
                      </div>
                    </div>

                    {/* 下方职责详情 */}
                    <div>
                      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 text-secondary-400 mr-2" />
                          课程重点
                        </h4>
                        <div className="space-y-2.5">
                          {position.responsibilities.map((responsibility, respIndex) => (
                            <motion.div
                              key={respIndex}
                              className={`flex items-start space-x-3 p-3 rounded-xl transition-all duration-300 ${
                                responsibility.highlighted
                                  ? 'bg-gradient-to-r from-[#38bdf8]/20 via-[#38bdf8]/10 to-transparent border border-[#38bdf8]/40 shadow-lg shadow-[#38bdf8]/10'
                                  : 'hover:bg-white/5'
                              }`}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: respIndex * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{
                                scale: responsibility.highlighted ? 1.02 : 1,
                                x: responsibility.highlighted ? 5 : 0
                              }}
                            >
                              <span className={`w-7 h-7 ${
                                responsibility.highlighted
                                  ? 'bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] text-white shadow-md shadow-[#38bdf8]/30'
                                  : 'bg-white/10 text-white/60'
                              } rounded-lg flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0`}>
                                {respIndex + 1}
                              </span>
                              <span className={`text-sm leading-relaxed ${
                                responsibility.highlighted
                                  ? 'text-white font-semibold'
                                  : 'text-white/75'
                              }`}>
                                {responsibility.text}
                              </span>
                              {responsibility.highlighted && (
                                <motion.div
                                  className="ml-auto flex-shrink-0"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.3 + respIndex * 0.05 }}
                                >
                                  <svg className="w-5 h-5 text-[#38bdf8]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                  </svg>
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>

                        {/* 进度指示器 */}
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${position.color} rounded-full mt-6 opacity-60 group-hover:opacity-100 transition-opacity`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ delay: 0.5, duration: 1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* 第五部分：岗位晋升路径 */}
        <motion.section className="mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.div
            className="bg-gradient-to-r from-[color:var(--gold-cinema)]/10 to-[color:var(--gold-warm)]/10 rounded-3xl p-8 border border-[color:var(--gold-cinema)]/20"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="w-10 h-10 text-[color:var(--gold-cinema)]" />
              <h2 className="text-3xl font-bold text-white">环保检测岗位发展路径</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="bg-gradient-to-br from-[color:var(--gold-cinema)]/10 to-cyan-500/10 rounded-2xl p-6 border border-[color:var(--gold-cinema)]/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-2">初级职位</div>
                <div className="text-3xl font-bold text-white mb-4">6K-10K</div>
                <div className="text-[color:var(--gold-warm)] text-sm">
                  <div>水质采样员</div>
                  <div>废气采样员/土壤采样员</div>
                  <div>理化分析员/微生物检测员</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[color:var(--gold-warm)]/10 to-[color:var(--gold-vintage)]/10 rounded-2xl p-6 border border-[color:var(--gold-warm)]/20 text-center"
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="text-2xl font-bold text-[color:var(--gold-warm)] mb-2">中级职位</div>
                <div className="text-3xl font-bold text-white mb-4">10K-20K</div>
                <div className="text-[color:var(--gold-vintage)] text-sm">
                  <div>项目经理/报告主审</div>
                  <div>质量主管/现场质量监督员</div>
                  <div>色谱质谱分析员</div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[color:var(--gold-cinema)]/10 to-[color:var(--gold-vintage)]/10 rounded-2xl p-6 border border-[color:var(--gold-cinema)]/20 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-2xl font-bold text-[color:var(--gold-cinema)] mb-2">高级职位</div>
                <div className="text-3xl font-bold text-white mb-4">20K+</div>
                <div className="text-[color:var(--gold-warm)] text-sm">
                  <div>环保咨询师/技术总监</div>
                  <div>ESG工程师/碳排放顾问</div>
                  <div>运维项目经理/体系审核员</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* 学习路径指引 - 弹簧动画 */}
        <motion.div 
                      className="glass-effect rounded-2xl p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: 0.2 
          }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.6)",
            borderColor: "rgba(255, 255, 255, 0.3)"
          }}
        >
          {/* 背景动画粒子效果 */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{ 
              background: [
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <motion.h2 
                            className="text-3xl font-bold text-base-50 mb-6 relative z-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            开始你的水质监测学习之旅
          </motion.h2>
          
          <motion.p 
            className="text-xl text-base-50/80 mb-8 max-w-2xl mx-auto relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            按照模块顺序学习，从技术规范到实践操作，循序渐进掌握水质样品采样与保存的专业技能。
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/course/technical-specification"
                className="btn-primary rounded-xl font-semibold transition-all duration-300 shadow-lg inline-block"
              >
                开始学习
              </Link>
            </motion.div>
            

          </motion.div>
        </motion.div>
              </div>
            </div>
  );
  };
  
export default HomePage; 