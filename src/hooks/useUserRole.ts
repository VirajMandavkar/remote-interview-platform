import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import DasboardBtn from "@/components/ui/DasboardBtn";

export const useUserRole = ()=>{
  const {user} = useUser();

  const userData= useQuery(api.users.getUserByClerkId,{
    clerkId: user?.id || ""
  })

  const isLoading = userData === undefined;

  return {
    isLoading,
    isInterviewer : userData?.role ==="interviewer",
    isCandidate : userData?.role ==="candidate",
  };
}

