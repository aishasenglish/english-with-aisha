import ProgrammeFinalCTA from "@/components/ProgrammeFinalCTA";
import { ieltsPage } from "@/content/ielts";
import { ieltsEnquiryFields, ieltsFinalEnquiry } from "@/content/ieltsEnquiry";

export default function IELTSFinalCTA() {
  return <ProgrammeFinalCTA content={ieltsPage.finalCta} fields={ieltsEnquiryFields} whatsappMessage={ieltsFinalEnquiry.whatsappMessage} analytics />;
}
