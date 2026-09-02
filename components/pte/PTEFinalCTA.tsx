import ProgrammeFinalCTA from "@/components/ProgrammeFinalCTA";
import { ptePage } from "@/content/pte";
import { pteEnquiryFields, pteFinalEnquiry } from "@/content/pteEnquiry";

export default function PTEFinalCTA() {
  return <ProgrammeFinalCTA content={ptePage.finalCta} fields={pteEnquiryFields} whatsappMessage={pteFinalEnquiry.whatsappMessage} analytics />;
}
