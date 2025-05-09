import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Contact Us</ThemedText>
      </ThemedView>
      <ThemedText>We’d love to hear from you! Whether you have a question about our coffee, want to book a space, or just want to say hello — we’re here for you.</ThemedText>
      <Collapsible title="Visit Us:">
        <ThemedText>
          
        </ThemedText>
        <ThemedText>
          Brewed Awakening Coffee{"\n"}
          123 Bean Street
          Coffeeville, USA
        </ThemedText>
        <ExternalLink href="https://www.google.com/maps/place/Bean+Hollow+Coffee+Co./@39.86677,-77.6992819,17z/data=!3m1!4b1!4m6!3m5!1s0x89c99b00349d5df7:0xd0820a480d1d3719!8m2!3d39.86677!4d-77.696707!16s%2Fg%2F11lybyg4b8?entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D">
          <ThemedText type="link">Google Maps</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Call Us:">
        <ThemedText>
          <ThemedText type="defaultSemiBold">(123) 456-7890</ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Email Us:">
        <ThemedText>
          hello@brewedawakening.com
        </ThemedText>
      </Collapsible>
            <ThemedText>
              ⏰ Hours:{"\n"}
                   {"\t"} Monday – Friday: 7am – 6pm
                   {"\t \t \n \t"} Saturday – Sunday: 8am – 4pm
            </ThemedText>
         
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
