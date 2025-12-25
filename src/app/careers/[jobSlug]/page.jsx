import { notFound } from "next/navigation";
import Banner from "@/components/Banner";
import JobDetails from "@/components/Careers/JobDetails";
import client from "@/utils/sanity";
import { getSEOData, generateMetadataFromSEO } from "@/utils/sanity";

async function getJobBySlug(slug) {
  const query = `*[_type == "jobOpening" && slug.current == $slug && isActive == true][0] {
    _id,
    title,
    slug,
    department,
    location,
    employmentType,
    experience,
    salary,
    description,
    requirements,
    responsibilities,
    benefits,
    postedDate,
    applicationDeadline,
    contactEmail
  }`;
  
  try {
    const job = await client.fetch(query, { slug });
    return job;
  } catch (error) {
    console.error("Error fetching job:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const job = await getJobBySlug(resolvedParams.jobSlug);
  
  if (!job) {
    return {
      title: "Job Not Found | Safelift Careers",
      description: "The requested job opening could not be found.",
    };
  }

  const seoData = await getSEOData(`/careers/${resolvedParams.jobSlug}`);
  
  return generateMetadataFromSEO(seoData, {
    title: `${job.title} | Careers | Safelift`,
    description: `Join Safelift as ${job.title} in ${job.location}. ${job.experience} experience required. Apply now for this exciting opportunity.`,
    alternates: {
      canonical: `https://safelift.in/careers/${resolvedParams.jobSlug}`,
    },
  });
}

export default async function JobDetailPage({ params }) {
  const resolvedParams = await params;
  const job = await getJobBySlug(resolvedParams.jobSlug);

  if (!job) {
    notFound();
  }

  return (
    <div className="overflow-hidden">
      <Banner title={job.title} ImageSource={"/AboutUs/Banner.webp"} />
      <JobDetails job={job} />
    </div>
  );
}