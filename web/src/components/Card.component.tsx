import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { IProduct } from '@interfaces/product.interface';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Box } from '@mui/material';
import { useState } from 'react';

interface CardComponentProps {
    product: IProduct
}



export default function CardComponent({ product }: CardComponentProps) {
    const [liked, setLiked] = useState(false);

    return (
        <Card sx={{
            width: '100%',
            height: 500,
            display: 'flex',
            flexDirection: 'column',
            transition: 'all 0.3s ease',
            '&:hover': {
                boxShadow: 6,
                transform: 'translateY(-4px)'
            }
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100"
                    image={product.main_image}
                    alt={product.name}
                    sx={{
                        objectFit: 'cover',
                        height: 280
                    }}
                />
            </CardActionArea>
            <CardContent sx={{
                flex: 1,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Typography gutterBottom variant="h6" component="div" sx={{
                    fontWeight: 600,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }}>
                    {product.name}
                </Typography>
                <Typography variant="body2" sx={{
                    color: 'text.secondary',
                    mb: 1,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    flex: 1
                }}>
                    {product.description}
                </Typography>
                <Box sx={{ mt: 'auto', pt: 1 }}>
                    <Typography variant="h6" sx={{
                        color: 'primary.main',
                        fontWeight: 700
                    }}>
                        ${(product.price - ((product.discount * product.price) / 100)).toFixed(2)}
                    </Typography>
                    {product.discount > 0 && (
                        <span className='flex flex-row items-center gap-2'>
                            Precio anterior:
                            <Typography variant="caption" sx={{
                                color: 'error.main',
                                textDecoration: 'line-through'
                            }}>
                                {(product.price).toFixed(2)}
                            </Typography>
                        </span>
                    )}
                    <Typography variant="body2" sx={{
                        color: 'text.secondary',
                        mt: 0.5
                    }}>
                        <strong>Entrega:</strong> {product.delivery.time}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{
                gap: 1,
                pt: 1,
                borderTop: '1px solid',
                borderColor: 'divider'
            }}>
                <IconButton
                    aria-label="add to favorites"
                    onClick={() => setLiked(!liked)}
                    sx={{
                        color: liked ? 'error.main' : 'inherit'
                    }}
                >
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
