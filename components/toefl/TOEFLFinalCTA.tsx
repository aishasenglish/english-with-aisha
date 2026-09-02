import ProgrammeFinalCTA from "@/components/ProgrammeFinalCTA";
import { toeflPage } from "@/content/toefl";
import { toeflEnquiryFields, toeflFinalEnquiry } from "@/content/toeflEnquiry";

export default function TOEFLFinalCTA() {
  return <ProgrammeFinalCTA content={toeflPage.finalCta} fields={toeflEnquiryFields} whatsappMessage={toeflFinalEnquiry.whatsappMessage} analytics />;
}
