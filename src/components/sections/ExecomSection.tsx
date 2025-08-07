import MemberCard from "@/components/MemberCard";

interface ExecomSectionProps {
  year: string;
}

const ExecomSection = ({ year }: ExecomSectionProps) => {
  const getMembers = (year: string) => {
    const baseMembers = [
      {
        name: "Dr. Rajesh Kumar",
        designation: "Chair",
        bio: "Expert in power electronics with 15+ years of experience in renewable energy systems and grid integration.",
        email: "rajesh.kumar@ieee.org",
        phone: "+91-9876543210"
      },
      {
        name: "Prof. Priya Sharma",
        designation: "Vice-Chair",
        bio: "Research focus on electric vehicle charging infrastructure and smart power converters.",
        email: "priya.sharma@ieee.org",
        phone: "+91-9876543211"
      },
      {
        name: "Dr. Arun Patel",
        designation: "Secretary",
        bio: "Specialist in power quality and harmonic analysis with extensive industry experience.",
        email: "arun.patel@ieee.org",
        phone: "+91-9876543212"
      },
      {
        name: "Ms. Sneha Reddy",
        designation: "Treasurer",
        bio: "Focus on financial planning and budget management for IEEE PELS activities.",
        email: "sneha.reddy@ieee.org",
        phone: "+91-9876543213"
      },
      {
        name: "Dr. Vikram Singh",
        designation: "Technical Chair",
        bio: "Leading researcher in power semiconductor devices and high-frequency converters.",
        email: "vikram.singh@ieee.org",
        phone: "+91-9876543214"
      },
      {
        name: "Prof. Anita Gupta",
        designation: "Membership Chair",
        bio: "Dedicated to growing IEEE PELS membership and enhancing member benefits.",
        email: "anita.gupta@ieee.org",
        phone: "+91-9876543215"
      },
      {
        name: "Dr. Suresh Nair",
        designation: "Publications Chair",
        bio: "Editor of technical publications and coordinator for research paper submissions.",
        email: "suresh.nair@ieee.org",
        phone: "+91-9876543216"
      },
      {
        name: "Ms. Kavitha Iyer",
        designation: "Student Activities Chair",
        bio: "Coordinator for student chapter activities and academic competitions.",
        email: "kavitha.iyer@ieee.org",
        phone: "+91-9876543217"
      },
      {
        name: "Dr. Ravi Krishnan",
        designation: "Industry Relations Chair",
        bio: "Bridge between academia and industry for collaborative projects and internships.",
        email: "ravi.krishnan@ieee.org",
        phone: "+91-9876543218"
      },
      {
        name: "Prof. Meera Joseph",
        designation: "Awards & Recognition Chair",
        bio: "Manages award nominations and recognition programs for outstanding achievements.",
        email: "meera.joseph@ieee.org",
        phone: "+91-9876543219"
      }
    ];

    // Modify names slightly for different years to show variation
    const yearSuffix = year.slice(-2);
    return baseMembers.map((member, index) => ({
      ...member,
      name: index < 3 ? member.name : `${member.name.replace('Dr.', 'Dr.')} (${yearSuffix})`,
    }));
  };

  const members = getMembers(year);

  return (
    <section id={`execom-${year}`} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">EXECOM {year}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the executive committee members who led IEEE PELS Bangalore in {year}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              designation={member.designation}
              bio={member.bio}
              email={member.email}
              phone={member.phone}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecomSection;