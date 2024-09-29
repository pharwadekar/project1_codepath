import './App.css';
import Card from './components/Cards';
import './components/Cards.css';
const App = () => {

  return (
    <div className="App">
      <h1>Food Truck Favorites</h1>
      <Card 
        imageUrl='https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&strip=all&w=1024' 
        restaurantName='The Halal Guys' 
        onViewMenu='https://thehalalguys.com/' 
      />
      <Card 
        imageUrl='https://media.timeout.com/images/105124791/750/422/image.jpg' 
        restaurantName='Kogi BBQ' 
        onViewMenu='https://kogibbq.com/' 
      />
      <Card
        imageUrl={'https://www.kwalityfoods.com/images/Kanti-Anand-Parekh.jpg'}
        restaurantName='Kwalities Ice Cream' 
        onViewMenu='https://www.kwalityfoods.com/' 
      />
      <Card 
        imageUrl='https://media.timeout.com/images/105124793/750/422/image.jpg' 
        restaurantName='Cousins Maine Lobster' 
        onViewMenu='https://www.cousinsmainelobster.com/' 
      />
      <Card
        imageUrl='https://thegrilledcheesetruck.com/wp-content/uploads/2017/03/gct-menu21-800x600.jpg' 
        restaurantName='The Grilled Cheese Truck' 
        onViewMenu='https://www.thegrilledcheesetruck.com/'
      />
      <Card
        imageUrl='https://photos.roaminghunger.com/1200x/2a29da56-f839-4ca6-91cf-d4867ae605eb.jpg' 
        restaurantName='Sweetery NYC' 
        onViewMenu='https://roaminghunger.com/sweetery-nyc/'
      />
      <Card
        imageUrl='https://static.wixstatic.com/media/7b8f68_d5506376cd7e427c9cd81eb514306f61~mv2.jpg/v1/fill/w_600,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WeChat%20Image_20230923000306.jpg' 
        restaurantName='The Lobos Truck' 
        onViewMenu='https://www.thelobostruck.com/'
      />
      <Card
        imageUrl='https://photos.roaminghunger.com/1200x/7d380dbf-24b4-43c7-b130-d46a94964bb4.jpg' 
        restaurantName='The Boba Truck Cafe' 
        onViewMenu='https://roaminghunger.com/the-boba-truck/'
      />
      <Card
        imageUrl='https://whatnowphoenix.com/wp-content/uploads/sites/7/2023/01/In-N-Out-Burger-Files-Proposal-With-the-City-of-Mesa.jpg' 
        restaurantName='In-N-Out Burger' 
        onViewMenu='https://www.in-n-out.com/'
      />
      <Card
        imageUrl='https://www.nrn.com/sites/nrn.com/files/Shake-Shack-Fishers-Ind.jpeg' 
        restaurantName='Shake Shack' 
        onViewMenu='https://www.shakeshack.com/'
      />

    </div>
  )
}

export default App