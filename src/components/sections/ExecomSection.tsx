import MemberCard from "@/components/MemberCard";

interface ExecomSectionProps {
  year: string;
}

const ExecomSection = ({ year }: ExecomSectionProps) => {
const getMembers = (year: string) => {
    const membersData: Record<string, any[]> = {
      "2022": [
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
        }
      ],
      "2023": [
        {
          name: "Dr. Sanjay Mehta",
          designation: "Chair",
          bio: "Renowned expert in power converters and energy management systems with international recognition.",
          email: "sanjay.mehta@ieee.org",
          phone: "+91-9876543220"
        },
        {
          name: "Prof. Lakshmi Narayanan",
          designation: "Vice-Chair",
          bio: "Specialist in renewable energy integration and smart grid technologies.",
          email: "lakshmi.narayanan@ieee.org",
          phone: "+91-9876543221"
        },
        {
          name: "Dr. Kiran Desai",
          designation: "Secretary",
          bio: "Expert in power electronics applications for industrial automation and control systems.",
          email: "kiran.desai@ieee.org",
          phone: "+91-9876543222"
        },
        {
          name: "Mr. Arjun Rao",
          designation: "Treasurer",
          bio: "Financial strategist with expertise in technology sector investments and budgeting.",
          email: "arjun.rao@ieee.org",
          phone: "+91-9876543223"
        },
        {
          name: "Dr. Deepika Joshi",
          designation: "Technical Chair",
          bio: "Leading researcher in wide bandgap semiconductors and high-efficiency power converters.",
          email: "deepika.joshi@ieee.org",
          phone: "+91-9876543224"
        },
        {
          name: "Prof. Ramesh Chandra",
          designation: "Membership Chair",
          bio: "Advocate for professional development and IEEE membership growth initiatives.",
          email: "ramesh.chandra@ieee.org",
          phone: "+91-9876543225"
        },
        {
          name: "Dr. Pooja Verma",
          designation: "Publications Chair",
          bio: "Editor and reviewer for leading power electronics journals and conferences.",
          email: "pooja.verma@ieee.org",
          phone: "+91-9876543226"
        },
        {
          name: "Ms. Divya Agarwal",
          designation: "Student Activities Chair",
          bio: "Mentor for student competitions and academic excellence programs.",
          email: "divya.agarwal@ieee.org",
          phone: "+91-9876543227"
        },
        {
          name: "Dr. Ashwin Kumar",
          designation: "Industry Relations Chair",
          bio: "Liaison for industry partnerships and technology transfer initiatives.",
          email: "ashwin.kumar@ieee.org",
          phone: "+91-9876543228"
        }
      ],
      "2024": [
        {
          name: "Dr. Madhavi Sinha",
          designation: "Chair",
          bio: "Pioneer in electric vehicle power systems and wireless power transfer technologies.",
          email: "madhavi.sinha@ieee.org",
          phone: "+91-9876543230"
        },
        {
          name: "Prof. Rohit Malhotra",
          designation: "Vice-Chair",
          bio: "Expert in digital control of power converters and energy storage systems.",
          email: "rohit.malhotra@ieee.org",
          phone: "+91-9876543231"
        },
        {
          name: "Dr. Neha Kapoor",
          designation: "Secretary",
          bio: "Specialist in power system reliability and fault analysis in renewable energy systems.",
          email: "neha.kapoor@ieee.org",
          phone: "+91-9876543232"
        },
        {
          name: "Ms. Varun Khanna",
          designation: "Treasurer",
          bio: "Corporate finance expert with focus on sustainable technology investments.",
          email: "varun.khanna@ieee.org",
          phone: "+91-9876543233"
        },
        {
          name: "Dr. Radha Krishnan",
          designation: "Technical Chair",
          bio: "Research leader in power electronics for aerospace and defense applications.",
          email: "radha.krishnan@ieee.org",
          phone: "+91-9876543234"
        },
        {
          name: "Prof. Sudhir Agrawal",
          designation: "Membership Chair",
          bio: "Champion of diversity and inclusion in engineering professional societies.",
          email: "sudhir.agrawal@ieee.org",
          phone: "+91-9876543235"
        },
        {
          name: "Dr. Nandini Sharma",
          designation: "Publications Chair",
          bio: "Associate editor for IEEE Transactions and organizer of peer review workshops.",
          email: "nandini.sharma@ieee.org",
          phone: "+91-9876543236"
        },
        {
          name: "Mr. Gaurav Mishra",
          designation: "Student Activities Chair",
          bio: "Coordinator for hackathons, technical contests, and skill development programs.",
          email: "gaurav.mishra@ieee.org",
          phone: "+91-9876543237"
        },
        {
          name: "Dr. Shilpa Reddy",
          designation: "Industry Relations Chair",
          bio: "Facilitator of academia-industry collaborations and startup mentoring programs.",
          email: "shilpa.reddy@ieee.org",
          phone: "+91-9876543238"
        },
        {
          name: "Prof. Venkat Subramanian",
          designation: "Awards & Recognition Chair",
          bio: "Coordinator for excellence awards and professional achievement recognition.",
          email: "venkat.subramanian@ieee.org",
          phone: "+91-9876543239"
        }
      ],
      "2025": [
        {
          name: "Dr. Aarti Patel",
          designation: "Chair",
          bio: "Visionary leader in next-generation power electronics and AI-driven energy management.",
          email: "aarti.patel@ieee.org",
          phone: "+91-9876543240"
        },
        {
          name: "Prof. Manoj Singh",
          designation: "Vice-Chair",
          bio: "Expert in quantum-enhanced power systems and advanced materials for energy devices.",
          email: "manoj.singh@ieee.org",
          phone: "+91-9876543241"
        },
        {
          name: "Dr. Ritu Agarwal",
          designation: "Secretary",
          bio: "Specialist in sustainable power technologies and carbon-neutral energy solutions.",
          email: "ritu.agarwal@ieee.org",
          phone: "+91-9876543242"
        },
        {
          name: "Mr. Sameer Jain",
          designation: "Treasurer",
          bio: "FinTech innovator with expertise in blockchain-based energy trading systems.",
          email: "sameer.jain@ieee.org",
          phone: "+91-9876543243"
        },
        {
          name: "Dr. Kavya Menon",
          designation: "Technical Chair",
          bio: "Research pioneer in neuromorphic computing for power system optimization.",
          email: "kavya.menon@ieee.org",
          phone: "+91-9876543244"
        },
        {
          name: "Prof. Ajay Kulkarni",
          designation: "Membership Chair",
          bio: "Global advocate for emerging engineers and cross-cultural professional exchange.",
          email: "ajay.kulkarni@ieee.org",
          phone: "+91-9876543245"
        },
        {
          name: "Dr. Priyanka Joshi",
          designation: "Publications Chair",
          bio: "Editor-in-chief for open access publications and digital research platforms.",
          email: "priyanka.joshi@ieee.org",
          phone: "+91-9876543246"
        },
        {
          name: "Ms. Rohini Das",
          designation: "Student Activities Chair",
          bio: "Creator of virtual reality learning platforms for power electronics education.",
          email: "rohini.das@ieee.org",
          phone: "+91-9876543247"
        },
        {
          name: "Dr. Arjun Reddy",
          designation: "Industry Relations Chair",
          bio: "Connector of global tech ecosystems and sustainable technology partnerships.",
          email: "arjun.reddy@ieee.org",
          phone: "+91-9876543248"
        },
        {
          name: "Prof. Sanya Malhotra",
          designation: "Innovation Chair",
          bio: "Leader in patent development and intellectual property strategy for emerging technologies.",
          email: "sanya.malhotra@ieee.org",
          phone: "+91-9876543249"
        }
      ]
    };

    return membersData[year] || [];
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