import { SimpleGrid } from '@mantine/core';
import useAssistant from '@/hooks/useAssistant';
import useUnsplashImage from '@/hooks/useUnsplash';
import Chat from '@/components/Chat';
import Map from '@/components/Map';
import FoodImage from '@/components/Food';
import { cssMainSize } from '@/theme';

export default function HomePage() {
  const { messages, sendMessageAndRun, isRunning, resetThread, foodName } = useAssistant();
  const { imageUrl } = useUnsplashImage(foodName);

  return (
    <SimpleGrid m="xl" cols={{ base: 1, sm: 3 }} h={cssMainSize}>
      <Chat
        messages={messages}
        sendMessageAndRun={sendMessageAndRun}
        isRunning={isRunning}
        resetThread={resetThread}
      />
      <Map />
      <FoodImage imageUrl={imageUrl} /> 
    </SimpleGrid>
  );
}
