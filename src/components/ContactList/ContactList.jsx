import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import toast from "react-hot-toast";
import css from "./ContactList.module.css";
import { GrUserManager } from "react-icons/gr";
import { FcPhoneAndroid } from "react-icons/fc";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const searchQuery = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleDelete = (id, name) => {
    dispatch(deleteContact(id));
    toast.success(`Contact "${name}" deleted!`);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <div className={css.container}>
            <p>
              <GrUserManager className={css.icon} />
              {name}
            </p>

            <p>
              <FcPhoneAndroid className={css.icon} />
              {number}
            </p>
          </div>
          <button onClick={() => handleDelete(id, name)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
