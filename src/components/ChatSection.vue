<script setup>
import { useChatStore } from "/src/stores/chatStore.js";
import { ref, computed } from "vue";
const store = useChatStore();
const chats = ref(computed(() => store.messages()));
const selectedUser = computed(() => store.selected_chat);
</script>

<template>
  <div
    v-if="store.selected_chat !== null"
    class="user-chat w-100 overflow-hidden"
  >
    <div class="d-lg-flex">
      <!-- start chat conversation section -->
      <div class="w-100 overflow-hidden position-relative">
        <div class="p-3 p-lg-4 border-bottom user-chat-topbar">
          <div class="row align-items-center">
            <div class="col-sm-4 col-8">
              <div class="d-flex align-items-center">
                <div class="d-block d-lg-none me-2 ms-0">
                  <a
                    href="javascript: void(0);"
                    class="user-chat-remove text-muted font-size-16 p-2"
                    ><i class="ri-arrow-left-s-line"></i
                  ></a>
                </div>
                <div class="me-3 ms-0">
                  <img
                    :src="selectedUser.avatar"
                    class="rounded-circle avatar-xs"
                    alt=""
                  />
                </div>
                <div class="flex-grow-1 overflow-hidden">
                  <h5 class="font-size-16 mb-0 text-truncate">
                    <a href="#" class="text-reset user-profile-show">{{
                      selectedUser.name
                    }}</a>
                    <i
                      style="vertical-align: unset"
                      class="ms-1"
                      :class="
                        selectedUser.status === 'active'
                          ? 'text-success'
                          : 'text-danger'
                      "
                    >
                      <svg
                        style="height: 15px; width: 15px"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fa-solid"
                        data-icon="circle-small"
                        class="svg-inline--fa fa-circle-small fa-w-10"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          d="M320 256c0 88.37-71.63 160-160 160s-160-71.63-160-160s71.63-160 160-160S320 167.6 320 256z"
                          fill="currentColor"
                        /></svg
                    ></i>
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-sm-8 col-4">
              <ul class="list-inline user-chat-nav text-end mb-0">
                <li class="list-inline-item">
                  <div class="dropdown">
                    <button
                      class="btn nav-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="ri-search-line"></i>
                    </button>
                    <div
                      class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-md"
                    >
                      <div class="search-box p-2">
                        <input
                          type="text"
                          class="form-control bg-light border-0"
                          placeholder="Search.."
                        />
                      </div>
                    </div>
                  </div>
                </li>

                <li class="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                  <button
                    type="button"
                    class="btn nav-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#audiocallModal"
                  >
                    <i class="ri-phone-line"></i>
                  </button>
                </li>

                <li class="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                  <button
                    type="button"
                    class="btn nav-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#videocallModal"
                  >
                    <i class="ri-vidicon-line"></i>
                  </button>
                </li>

                <li class="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                  <button type="button" class="btn nav-btn user-profile-show">
                    <i class="ri-user-2-line"></i>
                  </button>
                </li>

                <li class="list-inline-item">
                  <div class="dropdown">
                    <button
                      class="btn nav-btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="ri-more-fill"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a
                        class="dropdown-item d-block d-lg-none user-profile-show"
                        href="#"
                        >View profile
                        <i class="ri-user-2-line float-end text-muted"></i
                      ></a>
                      <a
                        class="dropdown-item d-block d-lg-none"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#audiocallModal"
                        >Audio <i class="ri-phone-line float-end text-muted"></i
                      ></a>
                      <a
                        class="dropdown-item d-block d-lg-none"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#videocallModal"
                        >Video
                        <i class="ri-vidicon-line float-end text-muted"></i
                      ></a>
                      <a class="dropdown-item" href="#"
                        >Archive
                        <i class="ri-archive-line float-end text-muted"></i
                      ></a>
                      <a class="dropdown-item" href="#"
                        >Muted
                        <i class="ri-volume-mute-line float-end text-muted"></i
                      ></a>
                      <a class="dropdown-item" href="#"
                        >Delete
                        <i class="ri-delete-bin-line float-end text-muted"></i
                      ></a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end chat user head -->

        <!-- start chat conversation -->
        <div class="chat-conversation p-3 p-lg-4" data-simplebar="init">
          <ul class="list-unstyled mb-0">
            <li
              v-for="chat in chats"
              :class="{ right: chat.from.id === store.my_id }"
            >
              <div class="conversation-list">
                <div class="user-chat-content">
                  <div class="ctext-wrap">
                    <div class="ctext-wrap-content">
                      <p class="mb-0">{{ chat.message }}</p>
                      <p class="chat-time mb-0">
                        <i class="ri-time-line align-middle"></i>
                        <span class="align-middle">{{ chat.created_at }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!-- end chat conversation end -->

        <!-- start chat input section -->
        <div class="chat-input-section p-3 p-lg-4 border-top mb-0">
          <form>
            <div class="row g-0">
              <div class="col">
                <input
                  type="text"
                  class="form-control form-control-lg bg-light border-light"
                  placeholder="Enter Message..."
                />
              </div>
              <div class="col-auto">
                <div class="chat-input-links ms-md-2 me-md-0">
                  <ul class="list-inline mb-0">
                    <li
                      class="list-inline-item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Emoji"
                    >
                      <button
                        type="button"
                        class="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect"
                      >
                        <i>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fa-light"
                            data-icon="face-grin-beam"
                            class="svg-inline--fa fa-face-grin-beam fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M125.7 231.8c3.391 1 7.459-.575 9.397-3.825l9.445-17c7.75-13.75 19.25-21.62 31.48-21.62c12.35 0 23.86 7.875 31.48 21.62l9.566 17C219.1 231.7 223.2 232.8 226.3 231.8c3.512-1.125 5.934-4.5 5.691-8.375C228.8 181.3 199.8 152 175.1 152c-23.73 0-52.54 29.25-55.81 71.38C119.8 227.1 122.1 230.6 125.7 231.8zM285.7 231.8c3.391 1 7.459-.575 9.397-3.825l9.494-17c7.629-13.75 19.13-21.62 31.48-21.62c12.23 0 23.81 7.875 31.56 21.62l9.445 17c2.18 3.75 6.103 4.825 9.252 3.825c3.633-1.125 6.055-4.5 5.691-8.375C388.7 181.3 359.8 152 336 152c-23.86 0-52.64 29.25-55.91 71.38C279.9 227.1 282.2 230.6 285.7 231.8zM379.2 304.8C348.9 314.5 303.1 320 256 320S163.1 314.5 132.8 304.8c-5.207-1.625-11.02-.5-15.26 3.125c-4.238 3.75-6.176 9.25-5.328 14.88c9.203 55 83.14 93.26 143.8 93.26c60.55 0 134.6-38.26 143.8-93.26c.9687-5.5-1.09-11.12-5.207-14.88C390.3 304.3 384.4 303 379.2 304.8zM256 384c-34.1 0-77.02-16.25-98.45-40.25c57.4 10.75 139.5 10.75 197 0C333 367.8 290.1 384 256 384zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z"
                              fill="currentColor"
                            />
                          </svg>
                        </i>
                      </button>
                    </li>
                    <li
                      class="list-inline-item"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Attached File"
                    >
                      <button
                        type="button"
                        class="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect"
                      >
                        <i>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fa-light"
                            data-icon="paperclip"
                            class="svg-inline--fa fa-paperclip fa-w-12"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path
                              d="M352 112V352c0 88.22-71.78 160-160 160s-160-71.78-160-160V208C32 199.2 39.16 192 48 192S64 199.2 64 208V352c0 70.58 57.42 128 128 128s128-57.42 128-128V112C320 67.89 284.1 32 240 32S160 67.89 160 112V320c0 17.64 14.36 32 32 32s32-14.36 32-32V144C224 135.2 231.2 128 240 128S256 135.2 256 144V320c0 35.3-28.7 64-64 64s-64-28.7-64-64V112C128 50.25 178.3 0 240 0S352 50.25 352 112z"
                              fill="currentColor"
                            />
                          </svg>
                        </i>
                      </button>
                    </li>
                    <li class="list-inline-item">
                      <button
                        type="submit"
                        class="btn btn-primary font-size-16 btn-lg chat-send waves-effect waves-light"
                      >
                        <i>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fa-light"
                            data-icon="paper-plane-top"
                            class="svg-inline--fa fa-paper-plane-top fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M492.6 226.6L44.6 34.59C40.54 32.85 36.26 31.1 32.02 31.1c-8.623 0-17.1 3.499-23.3 10.05C-.4983 51.81-2.623 66.3 3.377 78.31L96 256l-92.62 177.7c-6 12.02-3.875 26.5 5.344 36.27c6.188 6.547 14.66 10.05 23.28 10.05c4.25 0 8.531-.8438 12.59-2.594L492.6 285.4c11.78-5.031 19.41-16.61 19.41-29.41C511.1 243.2 504.4 231.6 492.6 226.6zM31.98 64.03C31.99 64.01 31.96 64.04 31.98 64.03L442.7 240H123.7L31.98 64.03zM31.75 448.5L123.7 272h318.1L31.75 448.5z"
                              fill="currentColor"
                            />
                          </svg>
                        </i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
        <!-- end chat input section -->
      </div>
      <!-- end chat conversation section -->

      <!-- start User profile detail sidebar -->
      <div class="user-profile-sidebar">
        <div class="px-3 px-lg-4 pt-3 pt-lg-4">
          <div class="user-chat-nav text-end">
            <button type="button" class="btn nav-btn" id="user-profile-hide">
              <i class="ri-close-line"></i>
            </button>
          </div>
        </div>

        <div class="text-center p-4 border-bottom">
          <div class="mb-4">
            <img
              src="/src/assets/images/users/avatar-4.jpg"
              class="rounded-circle avatar-lg img-thumbnail"
              alt=""
            />
          </div>

          <h5 class="font-size-16 mb-1 text-truncate">Doris Brown</h5>
          <p class="text-muted text-truncate mb-1">
            <i
              class="ri-record-circle-fill font-size-10 text-success me-1 ms-0"
            ></i>
            Active
          </p>
        </div>
        <!-- End profile user -->

        <!-- Start user-profile-desc -->
        <div class="p-4 user-profile-desc" data-simplebar>
          <div class="text-muted">
            <p class="mb-4">
              If several languages coalesce, the grammar of the resulting
              language is more simple and regular than that of the individual.
            </p>
          </div>

          <div class="accordion" id="myprofile">
            <div class="accordion-item card border mb-2">
              <div class="accordion-header" id="about3">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#aboutprofile"
                  aria-expanded="true"
                  aria-controls="aboutprofile"
                >
                  <h5 class="font-size-14 m-0">
                    <i
                      class="ri-user-2-line me-2 ms-0 align-middle d-inline-block"
                    ></i>
                    About
                  </h5>
                </button>
              </div>
              <div
                id="aboutprofile"
                class="accordion-collapse collapse show"
                aria-labelledby="about3"
                data-bs-parent="#myprofile"
              >
                <div class="accordion-body">
                  <div>
                    <p class="text-muted mb-1">Name</p>
                    <h5 class="font-size-14">Doris Brown</h5>
                  </div>

                  <div class="mt-4">
                    <p class="text-muted mb-1">Email</p>
                    <h5 class="font-size-14">adc@123.com</h5>
                  </div>

                  <div class="mt-4">
                    <p class="text-muted mb-1">Time</p>
                    <h5 class="font-size-14">11:40 AM</h5>
                  </div>

                  <div class="mt-4">
                    <p class="text-muted mb-1">Location</p>
                    <h5 class="font-size-14 mb-0">California, USA</h5>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item card border">
              <div class="accordion-header" id="attachfile3">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#attachprofile"
                  aria-expanded="false"
                  aria-controls="attachprofile"
                >
                  <h5 class="font-size-14 m-0">
                    <i
                      class="ri-attachment-line me-2 ms-0 align-middle d-inline-block"
                    ></i>
                    Attached Files
                  </h5>
                </button>
              </div>
              <div
                id="attachprofile"
                class="accordion-collapse collapse"
                aria-labelledby="attachfile3"
                data-bs-parent="#myprofile"
              >
                <div class="accordion-body">
                  <div class="card p-2 border mb-2">
                    <div class="d-flex align-items-center">
                      <div class="avatar-sm me-3 ms-0">
                        <div
                          class="avatar-title bg-soft-primary text-primary rounded font-size-20"
                        >
                          <i class="ri-file-text-fill"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <div class="text-start">
                          <h5 class="font-size-14 mb-1">admin_v1.0.zip</h5>
                          <p class="text-muted font-size-13 mb-0">12.5 MB</p>
                        </div>
                      </div>

                      <div class="ms-4 me-0">
                        <ul class="list-inline mb-0 font-size-18">
                          <li class="list-inline-item">
                            <a href="#" class="text-muted px-1">
                              <i class="ri-download-2-line"></i>
                            </a>
                          </li>
                          <li class="list-inline-item dropdown">
                            <a
                              class="dropdown-toggle text-muted px-1"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="ri-more-fill"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#"
                                >Another action</a
                              >
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">Delete</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="card p-2 border mb-2">
                    <div class="d-flex align-items-center">
                      <div class="avatar-sm me-3 ms-0">
                        <div
                          class="avatar-title bg-soft-primary text-primary rounded font-size-20"
                        >
                          <i class="ri-image-fill"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <div class="text-start">
                          <h5 class="font-size-14 mb-1">Image-1.jpg</h5>
                          <p class="text-muted font-size-13 mb-0">4.2 MB</p>
                        </div>
                      </div>

                      <div class="ms-4 me-0">
                        <ul class="list-inline mb-0 font-size-18">
                          <li class="list-inline-item">
                            <a href="#" class="text-muted px-1">
                              <i class="ri-download-2-line"></i>
                            </a>
                          </li>
                          <li class="list-inline-item dropdown">
                            <a
                              class="dropdown-toggle text-muted px-1"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="ri-more-fill"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#"
                                >Another action</a
                              >
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">Delete</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="card p-2 border mb-2">
                    <div class="d-flex align-items-center">
                      <div class="avatar-sm me-3 ms-0">
                        <div
                          class="avatar-title bg-soft-primary text-primary rounded font-size-20"
                        >
                          <i class="ri-image-fill"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <div class="text-start">
                          <h5 class="font-size-14 mb-1">Image-2.jpg</h5>
                          <p class="text-muted font-size-13 mb-0">3.1 MB</p>
                        </div>
                      </div>

                      <div class="ms-4 me-0">
                        <ul class="list-inline mb-0 font-size-18">
                          <li class="list-inline-item">
                            <a href="#" class="text-muted px-1">
                              <i class="ri-download-2-line"></i>
                            </a>
                          </li>
                          <li class="list-inline-item dropdown">
                            <a
                              class="dropdown-toggle text-muted px-1"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="ri-more-fill"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#"
                                >Another action</a
                              >
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">Delete</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="card p-2 border mb-2">
                    <div class="d-flex align-items-center">
                      <div class="avatar-sm me-3 ms-0">
                        <div
                          class="avatar-title bg-soft-primary text-primary rounded font-size-20"
                        >
                          <i class="ri-file-text-fill"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1">
                        <div class="text-start">
                          <h5 class="font-size-14 mb-1">Landing-A.zip</h5>
                          <p class="text-muted font-size-13 mb-0">6.7 MB</p>
                        </div>
                      </div>

                      <div class="ms-4 me-0">
                        <ul class="list-inline mb-0 font-size-18">
                          <li class="list-inline-item">
                            <a href="#" class="text-muted px-1">
                              <i class="ri-download-2-line"></i>
                            </a>
                          </li>
                          <li class="list-inline-item dropdown">
                            <a
                              class="dropdown-toggle text-muted px-1"
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i class="ri-more-fill"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">Action</a>
                              <a class="dropdown-item" href="#"
                                >Another action</a
                              >
                              <div class="dropdown-divider"></div>
                              <a class="dropdown-item" href="#">Delete</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end profile-user-accordion -->
          </div>
          <!-- end user-profile-desc -->
        </div>
        <!-- end User profile detail sidebar -->
      </div>
    </div>
  </div>
</template>
