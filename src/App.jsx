import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useSelector, useDispatch } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";
import { toast } from "react-hot-toast";
import "./App.css";

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const searchQuery = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleAddContact = (newContact) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      toast.error(`${newContact.name} is already in contacts!`);
      return;
    }

    dispatch(addContact(newContact));
    toast.success("Contact added successfully!");
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
    toast.success("Contact deleted successfully!");
  };

  const handleSearch = (query) => {
    dispatch(changeFilter(query));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox onSearch={handleSearch} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </>
  );
}

export default App;
