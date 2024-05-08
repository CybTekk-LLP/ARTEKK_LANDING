<script lang="ts">
    let direction = "left";
</script>

<div>
    <img src="./images/FeatureCard/Cars.webp" alt="" height="280px" />
    <img src="./images/FeatureCard/Cars.webp" alt="" height="280px" />
</div>

<style lang="scss">

    div{
        position: relative;
        &> img{
            &:last-of-type{
                position: absolute;
                inset-inline-start: 0;
                
            }
            &:first-of-type{
                rotate: 8deg;
                animation: shuffle 1.3s ease;
            }
            @keyframes shuffle {
                0%{
                    rotate: 8deg;
                }
                10%{
                    rotate: -4deg;
                }
                40%{
                    rotate: 8deg;
                }
                60%{
                    rotate: 0deg;
                }    
                100%{
                    rotate: 8deg;
                }
            }
        }
    }
</style>
