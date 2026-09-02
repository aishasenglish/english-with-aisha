import ProgrammeFinalCTA from "@/components/ProgrammeFinalCTA";
import { englishWritingContent } from "@/content/englishWriting";
import { englishWritingEnquiryFields, englishWritingFinalEnquiry } from "@/content/englishWritingEnquiry";

export default function EnglishWritingFinalCTA() {
  return <ProgrammeFinalCTA content={englishWritingContent.finalCta} fields={englishWritingEnquiryFields} whatsappMessage={englishWritingFinalEnquiry.whatsappMessage} analytics />;
}
