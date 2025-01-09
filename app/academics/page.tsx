import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AcademicsPage() {
  return (
    <main className="min-h-screen">
      {/*
        Top Section / Banner
        Adjust the height, background color, text alignment, etc. as you please
      */}
      <section className="bg-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">ACADEMICS</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            I’m a paragraph. Click here to add your own text and edit me.
          </p>
        </div>
      </section>

      {/*
        Grid with the subjects
        We'll make it a 3-column grid on desktop, and single or 2-col for smaller screens
      */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Social Studies Card */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Social Studies</CardTitle>
                <CardDescription>
                  I’m a paragraph. Click here to add your own text and edit me.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Image (replace with your own) */}
                <div className="mb-4">
                  <Image
                    src="/images/academic1.png"
                    alt="Social Studies"
                    width={600}
                    height={400}
                    className="w-full object-cover rounded"
                  />
                </div>
                {/* Learn More button */}
                <Button variant="default">Learn More</Button>
              </CardContent>
            </Card>

            {/* Science Card */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Science</CardTitle>
                <CardDescription>
                  I’m a paragraph. Click here to add your own text and edit me.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/images/academic2.png"
                    alt="Science"
                    width={600}
                    height={400}
                    className="w-full object-cover rounded"
                  />
                </div>
                <Button variant="default">Learn More</Button>
              </CardContent>
            </Card>

            {/* Math Card */}
            <Card className="shadow-sm bg-purple-900 text-white">
              <CardHeader>
                <CardTitle>Math</CardTitle>
                <CardDescription>
                  I’m a paragraph. Click here to add your own text and edit me.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/images/academic3.png"
                    alt="Math"
                    width={600}
                    height={400}
                    className="w-full object-cover rounded"
                  />
                </div>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-900"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Health Card */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Health</CardTitle>
                <CardDescription>
                  I’m a paragraph. Click here to add your own text and edit me.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/images/academic4.png"
                    alt="Health"
                    width={600}
                    height={400}
                    className="w-full object-cover rounded"
                  />
                </div>
                <Button variant="default">Learn More</Button>
              </CardContent>
            </Card>

            {/* Literature Arts Card */}
            <Card className="shadow-sm bg-purple-900 text-white">
              <CardHeader>
                <CardTitle>Literature Arts</CardTitle>
                <CardDescription>
                  I’m a paragraph. Click here to add your own text and edit me.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/images/academic4.png"
                    alt="Literature Arts"
                    width={600}
                    height={400}
                    className="w-full object-cover rounded"
                  />
                </div>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-900"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Art Card */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Art</CardTitle>
                <CardDescription>
                  I’m a paragraph. Click here to add your own text and edit me.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/images/academic5.png"
                    alt="Art"
                    width={600}
                    height={400}
                    className="w-full object-cover rounded"
                  />
                </div>
                <Button variant="default">Learn More</Button>
              </CardContent>
            </Card>

            {/* Physical Education Card */}
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Physical Education</CardTitle>
                <CardDescription>
                  I’m a paragraph. Click here to add your own text and edit me.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Image
                    src="/images/academic6.png"
                    alt="Physical Education"
                    width={600}
                    height={400}
                    className="w-full object-cover rounded"
                  />
                </div>
                <Button variant="default">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
