<script lang="ts">  
  import ButtonUse from './ButtonUse.svelte';
  import ButtonGroupUse from './ButtonGroupUse.svelte';
  import AlertUse from './AlertUse.svelte'; 
  import AccordionUse from './AccordionUse.svelte';
  // import BreadCrumbUse from './BreadCrumbUse.svelte';
  import BadgeUse from './BadgeUse.svelte';
  import ButtonDropdownUse from './ButtonDropdownUse.svelte';
  import CardUse from './CardUse.svelte';
  import CarouselUse from './CarouselUse.svelte';
  import CollapseUse from './CollapseUse.svelte';
  import DropdownUse from './DropdownUse.svelte';
  import FadeUse from './FadeUse.svelte';
  import IconUse from './IconUse.svelte';
  import ListGroupUse from './ListGroupUse.svelte';
  import NavUse from './NavUse.svelte';
  import NavbarUse from './NavbarUse.svelte';
  import OffcanvasUse from './OffcanvasUse.svelte';
  import PaginationUse from './PaginationUse.svelte';
  import PopoverUse from './PopoverUse.svelte';
  import ProgressUse from './ProgressUse.svelte';
  import SpinnerUse from './SpinnerUse.svelte';
  import StylesUse from './StylesUse.svelte';
  import TabsUse from './TabsUse.svelte';
  import ToastUse from './ToastUse.svelte';
  import TooltipUse from './TooltipUse.svelte';
  import InputsUse from './form/InputsUse.svelte';
  import InputGroupUse from './form/InputGroupUse.svelte';
  import FormGroupUse from './form/FormGroupUse.svelte';
  import ValidationUse from './form/ValidationUse.svelte';
  import ImagesUse from './content/ImagesUse.svelte';
  import TablesUse from './content/TablesUse.svelte';
  import GridUse from './layout/GridUse.svelte';
  import ContainerUse from './layout/ContainerUse.svelte';
  import ModalUse from './ModalUse.svelte';
  import NewModalUse from './NewModalUse.svelte';

  // test
  // import TestModal from './TestModal.svelte';
  import ModalMain from './modal/ModalMain.svelte';

</script>  

<div class="demo-container">
  <hr>
  <h3>Button</h3>
  <ButtonUse/>
  <hr>
  <h3>ButtonGroup</h3>
  <ButtonGroupUse/>
  <hr>
  <h3>Alert</h3>
  <AlertUse/> 
  <hr>
  <h3>Accordion</h3>
  <AccordionUse/>
  <hr>
  <h3>Badge</h3>
  <BadgeUse/>
  <hr>
  <h3>ButtonDropdown</h3>
  <ButtonDropdownUse/>
  <hr>
  <hr>
  <h3>BreadCrumb</h3>
  <!-- <BreadCrumbUse/> -->
  <h3>Card</h3>
  <CardUse/>
  <hr>
  <h3>Carousel</h3>
  <CarouselUse/>
  <hr>
  <h3>Collpase</h3>
  <CollapseUse/>
  <hr>
  <h3>Dropdown</h3>
  <DropdownUse/>
  <hr>
  <h3>Fade</h3>
  <FadeUse/>  
  <hr>
  <h3>Icon</h3>
  <IconUse/>
  <hr>
  <h3>List Group</h3>
  <ListGroupUse/>
  <hr>
  <h3>Nav Use</h3>
  <NavUse/>
  <hr>
  <h3>Navbar</h3>
  <NavbarUse/>
  <hr>
  <h3>Offcanvas</h3>
  <OffcanvasUse/>
  <hr>
  <h3>Pagination</h3>
  <PaginationUse/>
  <hr>
  <h3>Popover</h3>
  <PopoverUse/>
  <hr>
  <h3>Progress</h3>
  <ProgressUse/>
  <hr>
  <h3>Spinner</h3>
  <SpinnerUse/>
  <hr>
  <h3>Styles</h3>
  <StylesUse/>
  <hr>
  <h3>Tabs</h3>
  <TabsUse/>
  <hr>
  <h3>Toast</h3>
  <ToastUse/>
  <hr>
  <h3>Tooltip</h3>
  <!-- 잘 동작하지 않음 -->
  <TooltipUse/>
  <hr>
  <h3>Inputs</h3>
  <InputsUse/>
  <hr>
  <h3>Input Group</h3>
  <InputGroupUse/>
  <hr>
  <h3>Form Group</h3>
  <FormGroupUse/>
  <hr>
  <h3>Validation</h3>
  <ValidationUse/>
  <hr>
  <h3>Images</h3>
  <ImagesUse/>
  <hr>
  <h3>Tables</h3>
  <TablesUse/>
  <hr>
  <h3>Grid</h3>
  <GridUse/>
  <hr>
  <h3>Container</h3>
  <ContainerUse/>
  <hr>
  <h3>Modal</h3>
  <ModalUse/>
  <hr>
  <h3>NewModal</h3>
  <!-- 작업중 -->
  <NewModalUse/>
  <hr>
  <h2>ModalMain</h2>
  <ModalMain>
    <h1>Modal Main</h1>
    <p>Modal Main</p>
  </ModalMain>
  <br>
  <br>

</div>

<style>
  .demo-container {
    margin: 10px;
  }
</style>

