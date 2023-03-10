import { PlusIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { db } from "../firebase"


const NewChat = () => {

  const { data: session } = useSession();
  const router = useRouter();

  const createNewChat = async () => {
    const doc = await addDoc(collection(db, "users", session?.user?.email!, 'chats'),{
      userId: session?.user?.email!,
      timestamp: serverTimestamp()
    });

    router.push(`/chats/${doc?.id}`)
  }

  return (
    <div onClick={createNewChat} className="border-gray-700 border mobile md:chatRow">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  )
}
export default NewChat