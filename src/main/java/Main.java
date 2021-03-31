import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.swing.text.html.parser.Entity;

public class Main {

    EntityManagerFactory entityManagerFactory= Persistence.createEntityManagerFactory("org.hibernate.tutorial.jpa");


}
