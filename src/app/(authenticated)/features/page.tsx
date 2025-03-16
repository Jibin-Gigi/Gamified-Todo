'use client'

import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import { features } from '@/types/features'
import { useRouter } from 'next/navigation'

export default function FeaturesPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-[#44dd44] font-['Press_Start_2P'] text-sm"
            onClick={() => {
              router.push('/home')
              router.refresh()
            }}>
            <FiArrowLeft /> Back to Home
          </motion.button>
        </div>
        
        {/* <h2 className="text-2xl md:text-3xl font-['Press_Start_2P'] text-[#44dd44] text-center mb-12">
          All Features
        </h2> */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.path}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative border-2 bg-[#1a1a1a] p-6 rounded-xl h-full hover:bg-[#222222] transition-colors duration-200"
              style={{ borderColor: feature.color }}
              onClick={()=>{
                router.push(feature.path)
                router.refresh()
              }}
            >
              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-['Press_Start_2P'] text-lg mb-2" style={{ color: feature.color }}>
                  {feature.title}
                </h3>
                <p className="text-[#888888]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
