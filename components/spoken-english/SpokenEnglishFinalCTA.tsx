import ProgrammeFinalCTA from "@/components/ProgrammeFinalCTA";
import { spokenEnglishPage } from "@/content/spokenEnglish";
import { spokenEnglishEnquiryFields, spokenEnglishFinalEnquiry } from "@/content/spokenEnglishEnquiry";

export default function SpokenEnglishFinalCTA() {
  return <ProgrammeFinalCTA content={spokenEnglishPage.finalCta} fields={spokenEnglishEnquiryFields} whatsappMessage={spokenEnglishFinalEnquiry.whatsappMessage} />;
}
