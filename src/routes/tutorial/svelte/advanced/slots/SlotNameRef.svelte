<script lang="ts">
  

</script>

<h4>$$slots</h4>
<p>부모가 전달한 슬롯의 이름을 참조합니다. </p>
<slot name="header">
  <p>header slot에 컨텐츠가 제공이 되지 않으면 이 컨텐트가 slot에 표시될 것입니다.</p>
</slot>
<br>
<p>
  Named Slot의 내부 컨텐트입니다.
</p>
<slot name="footer">
  <p>footer slot에 컨텐츠가 제공이 되지 않으면 이 컨텐트가 slot에 표시될 것입니다.</p>
</slot>

<div>
  <ul>
    <li>
      $$slots: {JSON.stringify($$slots)}
    </li>
    <li>
      참조가 있으면 true 
      $$slots.header: {JSON.stringify($$slots.header)}
    </li>
    <li>
      참조가 없으면 undefined 
      $$slots.footer: {JSON.stringify($$slots.footer)}
    </li>

  </ul>
</div>


