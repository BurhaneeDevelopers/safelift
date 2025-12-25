// Sample script to add job openings to Sanity
// Run this in Sanity Studio's Vision tool or create documents manually

const sampleJobs = [
  {
    _type: 'jobOpening',
    title: 'Senior Mechanical Engineer',
    slug: { current: 'senior-mechanical-engineer' },
    department: 'engineering',
    location: 'Kolkata, West Bengal',
    employmentType: 'full-time',
    experience: '5-8 years',
    salary: '₹8-12 LPA',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'We are seeking a Senior Mechanical Engineer to join our engineering team. The ideal candidate will have extensive experience in material handling equipment design and manufacturing processes.'
          }
        ]
      }
    ],
    requirements: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Bachelor\'s degree in Mechanical Engineering\n• 5-8 years of experience in material handling equipment\n• Proficiency in CAD software (AutoCAD, SolidWorks)\n• Knowledge of manufacturing processes and quality standards\n• Strong problem-solving and analytical skills'
          }
        ]
      }
    ],
    responsibilities: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Design and develop material handling equipment\n• Collaborate with cross-functional teams\n• Ensure compliance with safety and quality standards\n• Provide technical support to manufacturing teams\n• Participate in product testing and validation'
          }
        ]
      }
    ],
    benefits: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Competitive salary and performance bonuses\n• Health insurance for employee and family\n• Professional development opportunities\n• Flexible working hours\n• Annual leave and festival bonuses'
          }
        ]
      }
    ],
    isActive: true,
    postedDate: new Date().toISOString(),
    applicationDeadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
  },
  {
    _type: 'jobOpening',
    title: 'Sales Executive',
    slug: { current: 'sales-executive' },
    department: 'sales-marketing',
    location: 'Mumbai, Maharashtra',
    employmentType: 'full-time',
    experience: '2-5 years',
    salary: '₹4-7 LPA + Incentives',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Join our sales team as a Sales Executive and help expand our market presence in the material handling equipment industry. This role offers excellent growth opportunities and attractive incentives.'
          }
        ]
      }
    ],
    requirements: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Bachelor\'s degree in Engineering or Business\n• 2-5 years of B2B sales experience\n• Knowledge of industrial equipment preferred\n• Excellent communication and negotiation skills\n• Willingness to travel within assigned territory'
          }
        ]
      }
    ],
    responsibilities: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Generate new business opportunities\n• Maintain relationships with existing clients\n• Achieve monthly and quarterly sales targets\n• Prepare sales reports and forecasts\n• Participate in trade shows and exhibitions'
          }
        ]
      }
    ],
    isActive: true,
    postedDate: new Date().toISOString(),
  },
  {
    _type: 'jobOpening',
    title: 'Quality Control Inspector',
    slug: { current: 'quality-control-inspector' },
    department: 'qa',
    location: 'Howrah, West Bengal',
    employmentType: 'full-time',
    experience: '1-3 years',
    salary: '₹3-5 LPA',
    description: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'We are looking for a detail-oriented Quality Control Inspector to ensure our products meet the highest quality standards. This role is perfect for someone passionate about quality and precision.'
          }
        ]
      }
    ],
    requirements: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Diploma/Degree in Mechanical Engineering or related field\n• 1-3 years of experience in quality control\n• Knowledge of quality standards and testing procedures\n• Attention to detail and analytical mindset\n• Basic computer skills for documentation'
          }
        ]
      }
    ],
    responsibilities: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: '• Inspect incoming materials and finished products\n• Conduct quality tests and measurements\n• Document inspection results and maintain records\n• Report quality issues to management\n• Ensure compliance with quality standards'
          }
        ]
      }
    ],
    isActive: true,
    postedDate: new Date().toISOString(),
  }
];

// Instructions:
// 1. Go to Sanity Studio (http://localhost:3333)
// 2. Navigate to Job Openings section
// 3. Create new documents using the above data
// 4. Or use the Vision tool to run GROQ queries

console.log('Sample job data ready for Sanity Studio');
console.log('Create these documents in your Sanity Studio Job Openings section');