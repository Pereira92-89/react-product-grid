import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from "./products.json";

function App() {


  return (

    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {data.map((product) => (
        <Card key={product.id ?? product.name ?? Math.random()} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={product.image ?? "/alens.jpeg"}
            title={product.title ?? product.name ?? "Product"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title ?? product.name ?? "Lizard"}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {product.description ?? product.desc ?? "No description available."}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>

  );
}


export default App
