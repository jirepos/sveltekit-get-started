<script lang="ts">
  // import { Card, CardBody } from 'sveltestrap';
  import { Card, 
     CardBody ,
     Button,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle
  } from  'naon-sveltestrap';
</script>

<Card>
  <CardBody>Hello World</CardBody>
</Card>

<br>
<Card body>Goodbye Cruel World</Card>
<br>

<Card class="mb-3">
  <CardHeader>
    <CardTitle>Card title</CardTitle>
  </CardHeader>
  <CardBody>
    <CardSubtitle>Card subtitle</CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </CardText>
    <Button>Button</Button>
  </CardBody>
  <CardFooter>Footer</CardFooter>
</Card>
<br>
<Card body color="primary" inverse class="mb-3">Primary</Card>
<Card body color="secondary" class="mb-3">Secondary</Card>
<Card body color="success" class="mb-3">Success</Card>
<Card body color="danger" class="mb-3">Danger</Card>
<Card body color="warning" class="mb-3">Warning</Card>
<Card body color="info" class="mb-3">Info</Card>
<Card body color="dark" inverse class="mb-3">Dark</Card>
<Card body color="light" class="mb-3">Light</Card>