import Header from '../components/Header'
import Footer from '../components/Footer'
import Budget from '../components/Budget';
import Expense_Form from '../components/Expense_Form';

const Home = () => {
    return ( 
        <main>
            <Header />
            <section className='mt-8 sm:grid sm:grid-cols-5 lg:grid-cols-7 gap-1'>
                <div className='m-3 p-3 card bg-gray-50 sm:col-span-3 lg:col-span-5'>
                    <Budget />
                </div>
                <div className='card p-5 m-3 bg-gray-50 sm:col-span-2 lg:col-span-2'>
                    <Expense_Form />
                </div>
            </section>
            <Footer />
        </main>
     );
}
 
export default Home;