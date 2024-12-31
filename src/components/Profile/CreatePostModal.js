import { useState, useEffect } from 'react';
import { mockCategories } from '../../mocks/categoryData';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Title,
  CloseButton,
  Form,
  ImageUploadArea,
  ImagePreviewArea,
  ImagePreview,
  TextArea,
  SubmitButton,
  ErrorMessage,
  ImageCount,
  ModeSelector,
  ModeButton,
  Input,
  Select,
  DateTimeInput,
  Label,
  FormGroup,
  CurrencyInputGroup,
  TabPanel
} from '../../styles/createPostModal.styles';
import { API_ENDPOINTS, fetchAPI } from '../../api/config';

function CreatePostModal({ onClose }) {
  const [postMode, setPostMode] = useState('normal'); // 'normal' or 'auction'
  const [images, setImages] = useState([]);
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // 경매 관련 상태
  const [auctionData, setAuctionData] = useState({
    categoryId: '',
    title: '',
    summary: '',
    description: '',
    startingPrice: '',
    currencyUnit: 'KRW',
    startTime: new Date().toISOString().slice(0, 16),
    endTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 16),
    bidIncrement: '',
    thumbnailImage: null,
    imageList: []
  });

  const MAX_IMAGES = 10;

  const handleImageUpload = (e, isAuctionImage = false) => {
    const files = Array.from(e.target.files);
    
    if (isAuctionImage) {
      if (auctionData.imageList.length + files.length > MAX_IMAGES) {
        setError(`이미지는 최대 ${MAX_IMAGES}개까지 업로드할 수 있습니다.`);
        return;
      }
      
      const newImages = files.map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      
      setAuctionData(prev => ({
        ...prev,
        imageList: [...prev.imageList, ...newImages]
      }));
    } else {
      if (images.length + files.length > MAX_IMAGES) {
        setError(`이미지는 최대 ${MAX_IMAGES}개까지 업로드할 수 있습니다.`);
        return;
      }
      
      const newImages = files.map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      setImages(prev => [...prev, ...newImages]);
    }
    
    setError('');
  };

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAuctionData(prev => ({
        ...prev,
        thumbnailImage: {
          file,
          preview: URL.createObjectURL(file)
        }
      }));
    }
  };

  const removeImage = (index, isAuctionImage = false) => {
    if (isAuctionImage) {
      setAuctionData(prev => ({
        ...prev,
        imageList: prev.imageList.filter((_, i) => i !== index)
      }));
    } else {
      setImages(prev => prev.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      
      if (postMode === 'normal') {
        // 일반 게시물 데이터 준비
        images.forEach(image => {
          formData.append('images', image.file);
        });
        formData.append('contents', content);

        // 일반 게시물 API 호출
        await fetchAPI(API_ENDPOINTS.POSTS.CREATE, {
          method: 'POST',
          headers: {
            // Content-Type은 FormData를 사용하므로 제거
          },
          body: formData
        });
      } else {
        // 경매 게시물 데이터 준비
        const startTimeISO = new Date(auctionData.startTime).toISOString();
        const endTimeISO = new Date(auctionData.endTime).toISOString();

        formData.append('categoryId', auctionData.categoryId);
        formData.append('title', auctionData.title);
        formData.append('summary', auctionData.summary);
        formData.append('description', auctionData.description);
        formData.append('startingPrice', auctionData.startingPrice);
        formData.append('currencyUnit', auctionData.currencyUnit);
        formData.append('startTime', startTimeISO);
        formData.append('endTime', endTimeISO);
        formData.append('bidIncrement', auctionData.bidIncrement);
        formData.append('thumbnailImage', auctionData.thumbnailImage?.file);
        auctionData.imageList.forEach(image => {
          formData.append('imageList', image.file);
        });

        // 경매 게시물 API 호출
        await fetchAPI(API_ENDPOINTS.AUCTION.CREATE, {
          method: 'POST',
          headers: {
            // Content-Type은 FormData를 사용하므로 제거
          },
          body: formData
        });
      }

      console.log('Successfully posted:', postMode === 'normal' ? 
        { images, content } : 
        {
          ...auctionData,
          startTime: new Date(auctionData.startTime).toISOString(),
          endTime: new Date(auctionData.endTime).toISOString()
        }
      );
      
      onClose();
    } catch (error) {
      console.error('Failed to create post:', error);
      setError('게시물 등록에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    return () => {
      images.forEach(image => URL.revokeObjectURL(image.preview));
      auctionData.imageList.forEach(image => URL.revokeObjectURL(image.preview));
      if (auctionData.thumbnailImage) {
        URL.revokeObjectURL(auctionData.thumbnailImage.preview);
      }
    };
  }, [images, auctionData]);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <Title>새 게시물 만들기</Title>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <ModeSelector>
          <ModeButton 
            active={postMode === 'normal'} 
            onClick={() => setPostMode('normal')}
          >
            일반 게시글
          </ModeButton>
          <ModeButton 
            active={postMode === 'auction'} 
            onClick={() => setPostMode('auction')}
          >
            경매 게시글
          </ModeButton>
        </ModeSelector>
        
        <Form onSubmit={handleSubmit}>
          {postMode === 'normal' ? (
            // 일반 게시글 폼
            <TabPanel>
              <input
                type="file"
                id="imageUpload"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              
              <ImageUploadArea
                onClick={() => document.getElementById('imageUpload').click()}
              >
                {images.length === 0 ? (
                  <div>클릭하여 이미지 업로드</div>
                ) : (
                  <>
                    <ImagePreviewArea>
                      {images.map((image, index) => (
                        <ImagePreview key={index}>
                          <img src={image.preview} alt={`Preview ${index}`} />
                          <button type="button" onClick={() => removeImage(index)}>×</button>
                        </ImagePreview>
                      ))}
                    </ImagePreviewArea>
                    <ImageCount>
                      {images.length}개의 이미지 선택됨 (최대 {MAX_IMAGES}개)
                    </ImageCount>
                  </>
                )}
              </ImageUploadArea>

              <TextArea
                placeholder="게시글 내용을 입력하세요..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </TabPanel>
          ) : (
            // 경매 게시글 폼
            <TabPanel>
              <FormGroup>
                <Label>카테고리</Label>
                <Select
                  value={auctionData.categoryId}
                  onChange={(e) => setAuctionData(prev => ({
                    ...prev,
                    categoryId: e.target.value
                  }))}
                >
                  <option value="">카테고리 선택</option>
                  {mockCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>제목</Label>
                <Input
                  type="text"
                  value={auctionData.title}
                  onChange={(e) => setAuctionData(prev => ({
                    ...prev,
                    title: e.target.value
                  }))}
                  placeholder="경매 상품의 제목을 입력하세요"
                />
              </FormGroup>

              <FormGroup>
                <Label>상품 설명 요약</Label>
                <Input
                  type="text"
                  value={auctionData.summary}
                  onChange={(e) => setAuctionData(prev => ({
                    ...prev,
                    summary: e.target.value
                  }))}
                  placeholder="상품에 대한 간단한 설명을 입력하세요"
                />
              </FormGroup>

              <FormGroup>
                <Label>상품 설명</Label>
                <TextArea
                  value={auctionData.description}
                  onChange={(e) => setAuctionData(prev => ({
                    ...prev,
                    description: e.target.value
                  }))}
                  placeholder="상품에 대한 자세한 설명을 입력하세요"
                />
              </FormGroup>

              <FormGroup>
                <Label>시작가</Label>
                <CurrencyInputGroup>
                  <Input
                    type="number"
                    value={auctionData.startingPrice}
                    onChange={(e) => setAuctionData(prev => ({
                      ...prev,
                      startingPrice: e.target.value
                    }))}
                    placeholder="시작 가격을 입력하세요"
                  />
                  <Select
                    value={auctionData.currencyUnit}
                    onChange={(e) => setAuctionData(prev => ({
                      ...prev,
                      currencyUnit: e.target.value
                    }))}
                  >
                    <option value="KRW">KRW</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </Select>
                </CurrencyInputGroup>
              </FormGroup>

              <FormGroup>
                <Label>경매 시작일</Label>
                <DateTimeInput
                  type="datetime-local"
                  value={auctionData.startTime}
                  onChange={(e) => setAuctionData(prev => ({
                    ...prev,
                    startTime: e.target.value
                  }))}
                />
              </FormGroup>

              <FormGroup>
                <Label>경매 종료일</Label>
                <DateTimeInput
                  type="datetime-local"
                  value={auctionData.endTime}
                  onChange={(e) => setAuctionData(prev => ({
                    ...prev,
                    endTime: e.target.value
                  }))}
                />
              </FormGroup>

              <FormGroup>
                <Label>입찰 기준가</Label>
                <Input
                  type="number"
                  value={auctionData.bidIncrement}
                  onChange={(e) => setAuctionData(prev => ({
                    ...prev,
                    bidIncrement: e.target.value
                  }))}
                  placeholder="최소 입찰 단위를 입력하세요"
                />
              </FormGroup>

              <FormGroup>
                <Label>썸네일 이미지</Label>
                <input
                  type="file"
                  id="thumbnailUpload"
                  accept="image/*"
                  onChange={handleThumbnailUpload}
                  style={{ display: 'none' }}
                />
                <ImageUploadArea
                  onClick={() => document.getElementById('thumbnailUpload').click()}
                >
                  {auctionData.thumbnailImage ? (
                    <ImagePreview>
                      <img src={auctionData.thumbnailImage.preview} alt="Thumbnail" />
                      <button 
                        type="button" 
                        onClick={() => setAuctionData(prev => ({
                          ...prev,
                          thumbnailImage: null
                        }))}
                      >
                        ×
                      </button>
                    </ImagePreview>
                  ) : (
                    <div>클릭하여 썸네일 이미지 업로드</div>
                  )}
                </ImageUploadArea>
              </FormGroup>

              <FormGroup>
                <Label>상품 이미지</Label>
                <input
                  type="file"
                  id="auctionImageUpload"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, true)}
                  style={{ display: 'none' }}
                />
                <ImageUploadArea
                  onClick={() => document.getElementById('auctionImageUpload').click()}
                >
                  {auctionData.imageList.length === 0 ? (
                    <div>클릭하여 상품 이미지 업로드</div>
                  ) : (
                    <>
                      <ImagePreviewArea>
                        {auctionData.imageList.map((image, index) => (
                          <ImagePreview key={index}>
                            <img src={image.preview} alt={`Product ${index}`} />
                            <button 
                              type="button" 
                              onClick={() => removeImage(index, true)}
                            >
                              ×
                            </button>
                          </ImagePreview>
                        ))}
                      </ImagePreviewArea>
                      <ImageCount>
                        {auctionData.imageList.length}개의 이미지 선택됨 (최대 {MAX_IMAGES}개)
                      </ImageCount>
                    </>
                  )}
                </ImageUploadArea>
              </FormGroup>
            </TabPanel>
          )}

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SubmitButton 
            type="submit" 
            disabled={
              isSubmitting || 
              (postMode === 'normal' 
                ? (images.length === 0 || !content.trim())
                : !auctionData.categoryId || 
                  !auctionData.title.trim() || 
                  !auctionData.startingPrice || 
                  !auctionData.startTime || 
                  !auctionData.endTime || 
                  !auctionData.bidIncrement || 
                  !auctionData.thumbnailImage
              )
            }
          >
            {isSubmitting ? '게시 중...' : '게시하기'}
          </SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
}

export default CreatePostModal; 