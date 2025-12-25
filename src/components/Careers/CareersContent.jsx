import Container from "../constants/Container";
import { Heading } from "../textComponents/Heading";
import { Body } from "../textComponents/Body";
import JobListings from "./JobListings";

const CareersContent = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        {/* Introduction Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <Heading className="text-[#008dd2] mb-6">
            Join Our Team at Safelift
          </Heading>
          <Body className="text-gray-600 max-w-3xl mx-auto">
            At Safelift Industries, we're always looking for talented individuals who share our passion for 
            excellence in material handling equipment manufacturing. Join our dynamic team and be part of 
            India's leading material handling solutions provider.
          </Body>
        </div>

        {/* Why Work With Us Section */}
        <div className="mb-12" data-aos="fade-up">
          <Heading className="text-center mb-8">Why Work With Us?</Heading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-[#008dd2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Growth Opportunities</h3>
              <Body className="text-gray-600 text-sm">
                Continuous learning and career advancement in a growing industry
              </Body>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-[#008dd2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Great Team Culture</h3>
              <Body className="text-gray-600 text-sm">
                Work with passionate professionals in a collaborative environment
              </Body>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-[#008dd2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Competitive Benefits</h3>
              <Body className="text-gray-600 text-sm">
                Attractive compensation packages and comprehensive benefits
              </Body>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <JobListings />
      </div>
    </Container>
  );
};

export default CareersContent;