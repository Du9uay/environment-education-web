import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import GlobalBackground from './components/GlobalBackground';
import PageVignette from './components/PageVignette';
import HomePage from './pages/HomePage';
import TechnicalSpecificationPage from './pages/course/TechnicalSpecificationPage';
import SamplingPointsPage from './pages/course/SamplingPointsPage';
import SamplingImplementationPage from './pages/course/SamplingImplementationPage';
import SamplePreservationPage from './pages/course/SamplePreservationPage';
import QualityControlPage from './pages/course/QualityControlPage';
import SamplingNotesPage from './pages/course/SamplingNotesPage';
import CourseTestPage from './pages/CourseTestPage';



const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <GlobalBackground />
        <PageVignette intensity="medium" />
        <Navigation />
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course/technical-specification" element={<TechnicalSpecificationPage />} />
            <Route path="/course/sampling-points" element={<SamplingPointsPage />} />
            <Route path="/course/sampling-implementation" element={<SamplingImplementationPage />} />
            <Route path="/course/sample-preservation" element={<SamplePreservationPage />} />
            <Route path="/course/quality-control" element={<QualityControlPage />} />
            <Route path="/course/sampling-notes" element={<SamplingNotesPage />} />
            <Route path="/course-test" element={<CourseTestPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App; 