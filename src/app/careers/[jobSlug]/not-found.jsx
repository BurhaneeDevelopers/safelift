import Link from "next/link";
import Container from "@/components/constants/Container";
import { Heading } from "@/components/textComponents/Heading";
import { Body } from "@/components/textComponents/Body";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container>
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-6">🔍</div>
          <Heading className="text-[#008dd2] mb-4">Job Not Found</Heading>
          <Body className="text-gray-600 mb-8">
            The job opening you're looking for doesn't exist or may have been removed.
          </Body>
          <div className="space-x-4">
            <Link href="/careers">
              <Button className="bg-[#008dd2] hover:bg-[#007bb8] text-white">
                View All Jobs
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}