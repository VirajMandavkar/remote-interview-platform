"use client"

import LoaderUI from "@/components/ui/LoaderUI";
import { useUserRole } from "@/hooks/useUserRole";
import { useRouter } from "next/navigation";
import InterviewScheduleUI from "./InterviewScheduleUI";

function SchedulePage(){
  const router = useRouter();

  const {isLoading,isInterviewer} = useUserRole()

  if(isLoading) return <LoaderUI/>
  if(!isInterviewer) return router.push('/')
  
    return <InterviewScheduleUI />;
  }
export default SchedulePage;