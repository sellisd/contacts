import { redirect } from "react-router-dom";
import { deleteContact, updateContact } from "../contacts";

export async function action({ params}){
  await deleteContact(params.contactId);
  return redirect("/");
}
