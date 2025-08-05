import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

interface MemberCardProps {
  name: string;
  designation: string;
  bio: string;
  email?: string;
  phone?: string;
  imageUrl?: string;
}

const MemberCard = ({ name, designation, bio, email, phone, imageUrl }: MemberCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 text-center">
        {/* Profile Image */}
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-2xl font-bold text-primary">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        
        {/* Member Info */}
        <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{designation}</p>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{bio}</p>
        
        {/* Contact Info */}
        <div className="space-y-2">
          {email && (
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Mail className="h-4 w-4 mr-2" />
              <span className="truncate">{email}</span>
            </div>
          )}
          {phone && (
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-2" />
              <span>{phone}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberCard;