<script setup lang="ts">
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import Textarea from "primevue/textarea";
import FileUpload from "primevue/fileupload";
import DatePicker from "primevue/datepicker";

import { ref } from "vue";
import Fluid from "primevue/fluid";

import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";

const investKind = ref([
  {
    num: 0,
    name: "台股",
  },
  {
    num: 1,
    name: "基金",
  },
  {
    num: 2,
    name: "外匯",
  },
]);

const actions = ref([
  {
    num: 0,
    name: "無動作",
  },
  {
    num: 1,
    name: "買進",
  },
  {
    num: 2,
    name: "賣出",
  },
]);

import { useToast } from "primevue/usetoast";
const toast = useToast();

const onUpload = () => {
  toast.add({ severity: "info", summary: "Success", detail: "File Uploaded", life: 3000 });
};
</script>

<template>
  <div class="flex flex-col rounded-xl">
    <h2 class="border text-center text-3xl">股票買賣紀錄</h2>

    <div class="tabCard size-auto flex flex-col gap-5 m-4 border border-green-700 rounded-4xl">
      <Tabs value="0">
        <TabList TabPanels class="flex justify-center items-center border mt-5">
          <Tab value="0">Header I</Tab>
          <Tab value="1">Header II</Tab>
          <Tab value="2">Header III</Tab>
        </TabList>
        <TabPanels class="bundaryBox border mt-5 m rounded-4xl">
          <TabPanel value="0">
            <form class="">
              <div class=" w-full border-red-500 rounded-4xl">
                <!-- <div class="w-full flex flex-col">
          <div class="w-full border mb-5">
            <label class="" for="name">項目</label>
            <Select :options="investKind" optionLabel="name" placeholder="請選擇動作" class="w-full" type="text" />
          </div>
          <div class="w-full border mb-5"></div>
        </div> -->
                <div class="w-full flex flex-col">
                  <div class="w-full border mb-5">
                    <label class="" for="name">名稱</label>
                    <InputText class="w-full" type="text" />
                  </div>
                  <div class="w-full border mb-5">
                    <label class="" for="name">代碼</label>
                    <InputText class="w-full" type="text" />
                  </div>
                </div>
                <div class="w-full flex flex-col">
                  <div class="w-full border mb-5">
                    <label class="" for="name">動作</label>
                    <Select :options="actions" optionLabel="name" placeholder="請選擇動作" class="w-full" type="text" />
                  </div>
                  <div class="w-full border mb-5">
                    <label class="" for="name">日期</label>
                    <DatePicker dateFormat="yy/mm/dd" class="w-full" type="text" />
                  </div>
                </div>
                <div class="w-full flex flex-col">
                  <div class="w-full border mb-5">
                    <label class="" for="name">數量</label>
                    <InputText class="w-full" type="text" />
                  </div>
                  <div class="w-full border mb-5">
                    <label class="" for="name">單價</label>
                    <InputText class="w-full" type="text" />
                  </div>
                </div>
                <div class="w-full flex flex-col">
                  <div class="w-full border mb-5">
                    <label class="" for="name">總成本</label>
                    <InputText class="w-full" type="text" />
                  </div>
                  <div class="w-full border mb-5">
                    <label class="" for="name">備註</label>
                    <InputText class="w-full" type="text" />
                  </div>
                </div>
                <div class="w-full flex flex-col">
                  <div class="w-full"></div>
                  <div class="w-full border pb-10">
                    <label class="" for="name">附件上傳</label>
                    <Toast />
                    <FileUpload
                      mode="basic"
                      name="demo[]"
                      url="/api/upload"
                      accept="image/*"
                      :maxFileSize="1000000"
                      @upload="onUpload"
                      :auto="true"
                      class=""
                      chooseLabel="上傳圖片" />
                  </div>
                </div>
              </div>
            </form>
          </TabPanel>
          <TabPanel class="rounded-4xl" value="1">
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed
              quia non numquam eius modi.
            </p>
          </TabPanel>
          <TabPanel class="rounded-4xl" value="2">
            <p class="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
              sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus.
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>

    <form class="formContainer size-auto flex flex-col gap-5 m-4 border border-green-700">
      <div class="bundaryBox border border-red-500 p-10 rounded-4xl">
        <!-- <div class="w-full flex flex-col">
          <div class="w-full border mb-5">
            <label class="" for="name">項目</label>
            <Select :options="investKind" optionLabel="name" placeholder="請選擇動作" class="w-full" type="text" />
          </div>
          <div class="w-full border mb-5"></div>
        </div> -->
        <div class="w-full flex flex-col">
          <div class="w-full border mb-5">
            <label class="" for="name">名稱</label>
            <InputText class="w-full" type="text" />
          </div>
          <div class="w-full border mb-5">
            <label class="" for="name">代碼</label>
            <InputText class="w-full" type="text" />
          </div>
        </div>
        <div class="w-full flex flex-col">
          <div class="w-full border mb-5">
            <label class="" for="name">動作</label>
            <Select :options="actions" optionLabel="name" placeholder="請選擇動作" class="w-full" type="text" />
          </div>
          <div class="w-full border mb-5">
            <label class="" for="name">日期</label>
            <DatePicker dateFormat="yy/mm/dd" class="w-full" type="text" />
          </div>
        </div>
        <div class="w-full flex flex-col">
          <div class="w-full border mb-5">
            <label class="" for="name">數量</label>
            <InputText class="w-full" type="text" />
          </div>
          <div class="w-full border mb-5">
            <label class="" for="name">單價</label>
            <InputText class="w-full" type="text" />
          </div>
        </div>
        <div class="w-full flex flex-col">
          <div class="w-full border mb-5">
            <label class="" for="name">總成本</label>
            <InputText class="w-full" type="text" />
          </div>
          <div class="w-full border mb-5">
            <label class="" for="name">備註</label>
            <InputText class="w-full" type="text" />
          </div>
        </div>
        <div class="w-full flex flex-col">
          <div class="w-full"></div>
          <div class="w-full border pb-10">
            <label class="" for="name">附件上傳</label>
            <Toast />
            <FileUpload
              mode="basic"
              name="demo[]"
              url="/api/upload"
              accept="image/*"
              :maxFileSize="1000000"
              @upload="onUpload"
              :auto="true"
              class=""
              chooseLabel="上傳圖片" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
