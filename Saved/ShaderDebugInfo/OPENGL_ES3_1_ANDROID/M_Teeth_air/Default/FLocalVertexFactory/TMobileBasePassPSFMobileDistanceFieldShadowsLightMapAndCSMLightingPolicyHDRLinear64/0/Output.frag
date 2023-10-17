// ! M_Teeth_air/Default/FLocalVertexFactory/TMobileBasePassPSFMobileDistanceFieldShadowsLightMapAndCSMLightingPolicyHDRLinear64/0/MobileBasePassPixelShader.usf:Main
// Compiled by ShaderConductor
// @Inputs: f4;10:in_var_TEXCOORD10,f4;11:in_var_TEXCOORD11,f4;0:in_var_TEXCOORD0,f4;4:in_var_TEXCOORD4,f4;8:in_var_TEXCOORD8
// @Outputs: f4;0:out_Target0,f1;1:out_Target1
// @PackedUB: View(0): View_ViewToClip(128,16),View_ViewForward(264,3),View_ViewRectMin(512,4),View_ViewSizeAndInvSize(516,4),View_PreExposure(546,1),View_NormalCurvatureToRoughnessScaleBias(732,3),View_SkyLightColor(748,4),View_ReflectionCubemapMaxMip(786,1),View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight(792,3),View_bSubsurfacePostprocessEnabled(987,1),View_SSProfilesTextureSizeAndInvSize(988,4)
// @PackedUB: MobileReflectionCapture(1): MobileReflectionCapture_Params(0,4)
// @PackedUB: PrecomputedLightingBuffer(2): PrecomputedLightingBuffer_StaticShadowMapMasks(0,4),PrecomputedLightingBuffer_InvUniformPenumbraSizes(4,4),PrecomputedLightingBuffer_LightMapScale(16,8),PrecomputedLightingBuffer_LightMapAdd(24,8)
// @PackedUB: MobileDirectionalLight(3): MobileDirectionalLight_DirectionalLightColor(0,4),MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition(4,4),MobileDirectionalLight_DirectionalLightShadowSize(8,4),MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale(12,4),MobileDirectionalLight_DirectionalLightShadowDistances(16,4),MobileDirectionalLight_DirectionalLightScreenToShadow(20,64),MobileDirectionalLight_DirectionalLightShadowMapChannelMask(84,1)
// @PackedUB: Material(4): Material_PreshaderBuffer_1(4,4),Material_PreshaderBuffer_2(8,4),Material_PreshaderBuffer_3(12,4),Material_PreshaderBuffer_4(16,4),Material_PreshaderBuffer_5(20,4),Material_PreshaderBuffer_6(24,4),Material_PreshaderBuffer_7(28,4)
// @PackedUBCopies: 0:128-0:h:0:16,0:264-0:m:0:3,0:512-0:m:4:4,0:516-0:h:16:4,0:546-0:h:20:1,0:732-0:h:24:3,0:748-0:h:28:4,0:786-0:m:8:1,0:792-0:h:32:3,0:987-0:h:36:1,0:988-0:h:40:4,1:0-1:h:0:4,2:0-2:h:0:4,2:4-2:h:4:4,2:16-2:m:0:8,2:24-2:m:8:8,3:0-3:m:0:4,3:4-3:m:4:4,3:8-3:m:8:4,3:12-3:m:12:4,3:16-3:m:16:4,3:20-3:h:0:64,3:84-3:u:0:1,4:4-4:h:0:4,4:8-4:h:4:4,4:12-4:h:8:4,4:16-4:h:12:4,4:20-4:h:16:4,4:24-4:h:20:4,4:28-4:h:24:4
// @Samplers: View_SSProfilesTexture(0:1[View_SSProfilesSampler]),View_SSProfilesPreIntegratedTexture(1:1[View_SSProfilesPreIntegratedSampler]),MobileReflectionCapture_Texture(2:1[MobileReflectionCapture_TextureSampler]),LightmapResourceCluster_LightMapTexture(3:1[LightmapResourceCluster_LightMapSampler]),LightmapResourceCluster_StaticShadowTexture(4:1[LightmapResourceCluster_StaticShadowTextureSampler]),MobileDirectionalLight_DirectionalLightShadowTexture(5:1[MobileDirectionalLight_DirectionalLightShadowSampler]),Material_Texture2D_0(6:1[Material_Texture2D_0Sampler]),Material_Texture2D_1(7:1[Material_Texture2D_1Sampler]),Material_Texture2D_2(8:1[Material_Texture2D_2Sampler]),Material_Texture2D_3(9:1[Material_Texture2D_3Sampler]),Material_Texture2D_4(10:1[Material_Texture2D_4Sampler]),Material_Texture2D_5(11:1[Material_Texture2D_5Sampler]),Material_Texture2D_6(12:1[Material_Texture2D_6Sampler]),Material_Texture2D_7(13:1[Material_Texture2D_7Sampler]),Material_Texture2D_8(14:1[Material_Texture2D_8Sampler]),Material_Texture2D_9(15:1[Material_Texture2D_9Sampler]),Material_Texture2D_10(16:1[Material_Texture2D_10Sampler])
#version 320 es
precision mediump float;
precision highp int;

#define View_SSProfilesTextureSizeAndInvSize (pc0_h[10])
#define View_bSubsurfacePostprocessEnabled (pc0_h[9].x)
#define View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight (pc0_h[8].xyz)
#define View_ReflectionCubemapMaxMip (pc0_m[2].x)
#define View_SkyLightColor (pc0_h[7])
#define View_NormalCurvatureToRoughnessScaleBias (pc0_h[6].xyz)
#define View_PreExposure (pc0_h[5].x)
#define View_ViewSizeAndInvSize (pc0_h[4])
#define View_ViewRectMin (pc0_m[1])
#define View_ViewForward (pc0_m[0].xyz)
#define View_ViewToClip (mat4(pc0_h[0 + 0].xyzw,pc0_h[0 + 1].xyzw,pc0_h[0 + 2].xyzw,pc0_h[0 + 3].xyzw))
#define SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler ps0
#define SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler ps1
#define SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler ps2
#define SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler ps3
#define SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler ps4
#define SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler ps5
#define SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler ps6
#define SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler ps7
#define SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler ps8
#define SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler ps9
#define SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler ps10
#define SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler ps11
#define SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler ps12
#define SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler ps13
#define SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler ps14
#define SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler ps15
#define SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler ps16
uniform mediump vec4 pc0_m[3];
uniform highp vec4 pc0_h[11];


#define MobileReflectionCapture_Params (pc1_h[0])
uniform highp vec4 pc1_h[1];


#define PrecomputedLightingBuffer_LightMapAdd(Offset) (pc2_m[2 + int(Offset)])
#define PrecomputedLightingBuffer_LightMapScale(Offset) (pc2_m[0 + int(Offset)])
#define PrecomputedLightingBuffer_InvUniformPenumbraSizes (pc2_h[1])
#define PrecomputedLightingBuffer_StaticShadowMapMasks (pc2_h[0])
uniform mediump vec4 pc2_m[4];
uniform highp vec4 pc2_h[2];


#define MobileDirectionalLight_DirectionalLightShadowMapChannelMask (pc3_u[0].x)
#define MobileDirectionalLight_DirectionalLightScreenToShadow(Offset) (mat4(pc3_h[0 + (int(Offset) * 4) + 0].xyzw,pc3_h[0 + (int(Offset) * 4) + 1].xyzw,pc3_h[0 + (int(Offset) * 4) + 2].xyzw,pc3_h[0 + (int(Offset) * 4) + 3].xyzw))
#define MobileDirectionalLight_DirectionalLightShadowDistances (pc3_m[4])
#define MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale (pc3_m[3])
#define MobileDirectionalLight_DirectionalLightShadowSize (pc3_m[2])
#define MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition (pc3_m[1])
#define MobileDirectionalLight_DirectionalLightColor (pc3_m[0])
uniform uvec4 pc3_u[1];
uniform highp vec4 pc3_h[16];
uniform mediump vec4 pc3_m[5];


#define Material_PreshaderBuffer_7 (pc4_h[6])
#define Material_PreshaderBuffer_6 (pc4_h[5])
#define Material_PreshaderBuffer_5 (pc4_h[4])
#define Material_PreshaderBuffer_4 (pc4_h[3])
#define Material_PreshaderBuffer_3 (pc4_h[2])
#define Material_PreshaderBuffer_2 (pc4_h[1])
#define Material_PreshaderBuffer_1 (pc4_h[0])
uniform highp vec4 pc4_h[7];


uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler;
uniform highp sampler2D SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler;
uniform highp sampler2D SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler;
uniform highp sampler2D SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler;
uniform highp sampler2D SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler;
uniform highp sampler2DArray SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler;
uniform highp samplerCube SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler;

layout(location = 0) in vec4 in_var_TEXCOORD10;
layout(location = 1) in vec4 in_var_TEXCOORD11;
layout(location = 2) in highp vec4 in_var_TEXCOORD0[1];
layout(location = 3) in highp vec4 in_var_TEXCOORD4;
layout(location = 4) in highp vec4 in_var_TEXCOORD8;
layout(location = 0) out vec4 out_var_SV_Target0;
layout(location = 1) out highp float out_var_SV_Target1;

vec4 _467;
vec3 _468;

void main()
{
    highp vec4 _506 = vec4((((gl_FragCoord.xy - View_ViewRectMin.xy) * View_ViewSizeAndInvSize.zw) - vec2(0.5)) * vec2(2.0, -2.0), gl_FragCoord.z, 1.0) * (1.0 / gl_FragCoord.w);
    highp vec3 _515;
    if (View_ViewToClip[3].w >= 1.0)
    {
        _515 = -View_ViewForward;
    }
    else
    {
        _515 = normalize(-in_var_TEXCOORD8.xyz);
    }
    vec2 _179 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_0Material_Texture2D_0Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _526 = vec4(_179, sqrt(clamp(1.0 - dot(_179, _179), 0.0, 1.0)), 1.0).xyz * Material_PreshaderBuffer_1.xyz;
    float _87 = _526.z + 1.0;
    vec2 _186 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_1Material_Texture2D_1Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y)).xy * vec2(2.0)) - vec2(1.0);
    highp vec4 _537 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_2Material_Texture2D_2Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp float _540 = _537.x * Material_PreshaderBuffer_1.w;
    vec3 _91 = vec4(_186, sqrt(clamp(1.0 - dot(_186, _186), 0.0, 1.0)), 1.0).xyz * vec3(_540, _540, 1.0);
    vec3 _96 = vec3(_526.xy, _87);
    vec3 _100 = vec3(_91.xy * vec2(-1.0), _91.z);
    vec3 _106 = (_96 * vec3(dot(_96, _100))) - (vec3(_87) * _100);
    float _108 = _106.z + 1.0;
    vec2 _193 = (texture(SPIRV_Cross_CombinedMaterial_Texture2D_3Material_Texture2D_3Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y) * vec2(Material_PreshaderBuffer_2.x)).xy * vec2(2.0)) - vec2(1.0);
    highp vec3 _553 = mix(vec3(0.0, 0.0, 1.0), vec4(_193, sqrt(clamp(1.0 - dot(_193, _193), 0.0, 1.0)), 1.0).xyz, vec3(Material_PreshaderBuffer_2.y));
    vec3 _116 = vec3(_106.xy, _108);
    vec3 _120 = vec3(_553.xy * vec2(-1.0), _553.z);
    vec3 _126 = (_116 * vec3(dot(_116, _120))) - (vec3(_108) * _120);
    float _128 = _126.z + 1.0;
    highp vec4 _557 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_4Material_Texture2D_4Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec2 _200 = (_557.xy * vec2(2.0)) - vec2(1.0);
    highp float _560 = sqrt(clamp(1.0 - dot(_200, _200), 0.0, 1.0));
    vec3 _133 = vec3(_126.xy, _128);
    vec3 _136 = vec3(vec4(_200, _560, 1.0).xy * vec2(-1.0), _560);
    vec3 _143 = normalize(mat3(in_var_TEXCOORD10.xyz, cross(in_var_TEXCOORD11.xyz, in_var_TEXCOORD10.xyz) * in_var_TEXCOORD11.w, in_var_TEXCOORD11.xyz) * ((_133 * vec3(dot(_133, _136))) - (vec3(_128) * _136))) * 1.0;
    highp vec3 _565 = (-_515) + ((_143 * dot(_143, _515)) * 2.0);
    highp vec4 _569 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_5Material_Texture2D_5Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    highp vec4 _576 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_6Material_Texture2D_6Sampler, Material_PreshaderBuffer_3.xy);
    highp vec4 _580 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_7Material_Texture2D_7Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    vec3 _144 = _569.xyz;
    highp vec4 _587 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_8Material_Texture2D_8Sampler, Material_PreshaderBuffer_4.xy);
    highp vec4 _593 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_9Material_Texture2D_9Sampler, vec2(in_var_TEXCOORD0[0].x, in_var_TEXCOORD0[0].y));
    float _155 = _593.x;
    vec3 _157 = mix(mix(_144, _576.xyz * (_144 / _580.xyz), vec3(0.669921875)), (_587.xyz * (_144 * vec3(1.0380132198333740234375, 1.27521789073944091796875, 1.815602779388427734375))) * vec3(Material_PreshaderBuffer_4.z), vec3(_155));
    highp vec4 _600 = texture(SPIRV_Cross_CombinedMaterial_Texture2D_10Material_Texture2D_10Sampler, Material_PreshaderBuffer_5.yz);
    float _209 = _600.x;
    float _210 = _600.y;
    float _207 = _600.z;
    vec3 _166 = _537.xyz;
    vec3 _168 = normalize(in_var_TEXCOORD11.xyz);
    vec3 _215 = clamp(mix(_157, _157 * vec3((_209 <= 0.0) ? 0.0 : pow(_209, 0.300048828125), (_210 <= 0.0) ? 0.0 : pow(_210, 0.300048828125), (_207 <= 0.0) ? 0.0 : pow(_207, 0.300048828125)), vec3(_155 * clamp(1.0 - ((1.0 - _593.y) * Material_PreshaderBuffer_6.y), 0.0, 1.0))) * _166, vec3(0.0), vec3(1.0));
    float _216 = clamp((_166 * vec3(smoothstep(0.0, Material_PreshaderBuffer_6.z, dot(((vec3(dot(_515, _168)) * _168) * vec3(2.0)) - _515, _515)) * 0.449951171875)).x, 0.0, 1.0);
    highp float _622 = max(0.015625, clamp(mix(Material_PreshaderBuffer_7.x, Material_PreshaderBuffer_6.w, _155), 0.0, 1.0));
    vec3 _219 = dFdx(_143);
    vec3 _220 = dFdy(_143);
    vec3 _224 = vec3(0.07999999821186065673828125 * _216);
    highp vec2 _631 = in_var_TEXCOORD4.xy * vec2(1.0, 0.5);
    highp vec4 _636 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _631);
    highp vec4 _638 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_LightMapTextureLightmapResourceCluster_LightMapSampler, _631 + vec2(0.0, 0.5));
    vec3 _231 = (_636.xyz * PrecomputedLightingBuffer_LightMapScale(0).xyz) + PrecomputedLightingBuffer_LightMapAdd(0).xyz;
    float _244 = dot(_231, vec3(0.300048828125, 0.58984375, 0.1099853515625));
    float _243 = (exp2((_244 * 16.0) - 8.0) - 0.00390625) * max(0.0, dot((_638 * PrecomputedLightingBuffer_LightMapScale(1)) + PrecomputedLightingBuffer_LightMapAdd(1), vec4(_143.yzx, 1.0)));
    highp vec4 _653 = texture(SPIRV_Cross_CombinedLightmapResourceCluster_StaticShadowTextureLightmapResourceCluster_StaticShadowTextureSampler, in_var_TEXCOORD4.zw);
    highp vec4 _660 = clamp((_653 * PrecomputedLightingBuffer_InvUniformPenumbraSizes) + ((PrecomputedLightingBuffer_InvUniformPenumbraSizes * (-0.5)) + vec4(0.5)), vec4(0.0), vec4(1.0));
    highp float _665 = _506.w;
    highp vec4 _689;
    int _672 = 0;
    for (;;)
    {
        if (_672 < 4)
        {
            if (_665 < MobileDirectionalLight_DirectionalLightShadowDistances[uint(_672)])
            {
                _689 = MobileDirectionalLight_DirectionalLightScreenToShadow(_672) * vec4(_506.xy, _665, 1.0);
                break;
            }
            _672++;
            continue;
        }
        else
        {
            _689 = vec4(0.0);
            break;
        }
    }
    float _343;
    if (_689.z > 0.0)
    {
        highp vec2 _699 = (_689.xy * MobileDirectionalLight_DirectionalLightShadowSize.xy) - vec2(0.5);
        highp vec2 _700 = fract(_699);
        highp vec2 _704 = (floor(_699) + vec2(1.0)) * MobileDirectionalLight_DirectionalLightShadowSize.zw;
        highp vec4 _710 = vec4((min(1.0 - _689.z, 0.999989986419677734375) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - 1.0);
        highp vec4 _712 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _704, ivec2(-1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _710, vec4(0.0), vec4(1.0));
        highp vec4 _717 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _704, ivec2(1, -1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _710, vec4(0.0), vec4(1.0));
        highp vec4 _722 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _704, ivec2(-1, 1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _710, vec4(0.0), vec4(1.0));
        highp vec4 _727 = clamp((textureGatherOffset(SPIRV_Cross_CombinedMobileDirectionalLight_DirectionalLightShadowTextureMobileDirectionalLight_DirectionalLightShadowSampler, _704, ivec2(1)) * MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.w) - _710, vec4(0.0), vec4(1.0));
        highp float _729 = _700.x;
        highp float _730 = 1.0 - _729;
        highp vec4 _757 = _467;
        _757.x = (((_712.w * _730) + _712.z) + _717.w) + (_717.z * _729);
        highp vec4 _761 = _757;
        _761.y = (((_712.x * _730) + _712.y) + _717.x) + (_717.y * _729);
        highp vec4 _765 = _761;
        _765.z = (((_722.w * _730) + _722.z) + _727.w) + (_727.z * _729);
        highp vec4 _769 = _765;
        _769.w = (((_722.x * _730) + _722.y) + _727.x) + (_727.y * _729);
        highp float _770 = _700.y;
        highp float _779 = clamp((_665 * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.x) + MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.y, 0.0, 1.0);
        _343 = mix(dot(_769, vec4(1.0 - _770, 1.0, 1.0, _770) * 0.111111111938953399658203125), 1.0, _779 * _779);
    }
    else
    {
        _343 = 1.0;
    }
    highp vec4 _798 = vec4(float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 1u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 2u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 4u) != 0u), float((MobileDirectionalLight_DirectionalLightShadowMapChannelMask & 8u) != 0u));
    float _258 = _343 * mix(1.0, dot((PrecomputedLightingBuffer_StaticShadowMapMasks * _660) * _660, _798), dot(_798, vec4(1.0)));
    highp float _802 = max(0.0, dot(_143, normalize(_515 + MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz)));
    uint _805 = uint(((vec4(_468.x, _468.y, _468.z, vec4(1.0, 1.0, 1.0, Material_PreshaderBuffer_7.y).w) * View_bSubsurfacePostprocessEnabled).w * 255.0) + 0.5);
    highp vec4 _816 = textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(5u, _805)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0);
    float _272 = _816.z;
    highp float _819 = max(clamp(_622 * (_816.x * 2.0), 0.0, 1.0), 0.0199999995529651641845703125);
    float _276 = clamp(_622 * (_816.y * 2.0), 0.0, 1.0);
    float _262 = mix(_819, _276, _272);
    float _263 = dot(_143, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz);
    highp vec3 _838 = vec3(1.0) * max(0.0, dot(_143, MobileDirectionalLight_DirectionalLightDirectionAndShadowTransition.xyz));
    highp float _843 = 1.0 - (_802 * _802);
    float _280 = _819 * _819;
    highp float _844 = _802 * _280;
    highp float _846 = _280 / (_843 + (_844 * _844));
    float _284 = _276 * _276;
    highp float _847 = _802 * _284;
    highp float _849 = _284 / (_843 + (_847 * _847));
    vec4 _298 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _262) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _299 = _298.x;
    float _302 = exp2((-9.28125) * clamp(abs(dot(_143, _515)) + 1.0013580322265625e-05, 0.0, 1.0));
    vec2 _309 = (vec2(-1.0400390625, 1.0400390625) * ((min(_299 * _299, _302) * _299) + _298.y)) + _298.zw;
    float _293 = clamp(_216 * 4.0, 0.0, 1.0);
    highp vec3 _859 = (((mix(_838 * _258, textureLod(SPIRV_Cross_CombinedView_SSProfilesPreIntegratedTextureView_SSProfilesPreIntegratedSampler, vec3((max(_263 - (max(2.0 * _263, 0.4000000059604644775390625) * (1.0 - sqrt(_258))), -1.0) * 0.5) + 0.5, clamp(pow(max(dot(_219, _219), dot(_220, _220)), View_NormalCurvatureToRoughnessScaleBias.z), 0.001000000047497451305389404296875, 1.0), float(_805)), 0.0).xyz, textureLod(SPIRV_Cross_CombinedView_SSProfilesTextureView_SSProfilesSampler, (vec2(uvec2(0u, _805)) + vec2(0.5)) * View_SSProfilesTextureSizeAndInvSize.zw, 0.0).xyz) * (_215 * 0.318407952785491943359375)) * 1.0) + ((_838 * (((_224 * _309.x) + vec3(_293 * _309.y)) * (mix(min(_846 * _846, 2048.0), min(_849 * _849, 2048.0), _272) * ((_262 * 0.25) + 0.25)))) * MobileDirectionalLight_DirectionalLightDistanceFadeMADAndSpecularScale.z)) * (MobileDirectionalLight_DirectionalLightColor.xyz * _258);
    vec3 _344;
    if (float(MobileReflectionCapture_Params.y > 0.0) != 0.0)
    {
        _344 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _565, (MobileReflectionCapture_Params.y - 1.0) - (1.0 - (1.2001953125 * log2(max(_622, 0.00100040435791015625))))).xyz * View_SkyLightColor.xyz;
    }
    else
    {
        _344 = textureLod(SPIRV_Cross_CombinedMobileReflectionCapture_TextureMobileReflectionCapture_TextureSampler, _565, (View_ReflectionCubemapMaxMip - 1.0) - (1.0 - (1.2001953125 * log2(max(_622, 0.00100040435791015625))))).xyz * MobileReflectionCapture_Params.w;
    }
    vec4 _333 = (vec4(-1.0, -0.027496337890625, -0.57177734375, 0.022003173828125) * _622) + vec4(1.0, 0.042510986328125, 1.0400390625, -0.040008544921875);
    float _334 = _333.x;
    vec2 _342 = (vec2(-1.0400390625, 1.0400390625) * ((min(_334 * _334, _302) * _334) + _333.y)) + _333.zw;
    vec3 _70 = ((((_231 * (_243 / max(9.9999997473787516355514526367188e-06, _244))) * _215) + _859) + (((_344 * mix(1.0, min(_243 / max(MobileReflectionCapture_Params.x, 9.9999997473787516355514526367188e-05), View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.z), smoothstep(0.0, 1.0, clamp((_622 * View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.x) + View_ReflectionEnvironmentRoughnessMixingScaleBiasAndLargestWeight.y, 0.0, 1.0)))) * 1.0) * ((_224 * _342.x) + vec3(_293 * _342.y)))) * 1.0;
    vec4 _345 = vec4(_70.x, _70.y, _70.z, _467.w);
    _345.w = 0.0;
    highp vec3 _901 = min((_345.xyz * View_PreExposure).xyz, vec3(32512.0, 32512.0, 32256.0));
    out_var_SV_Target0 = vec4(_901.x, _901.y, _901.z, _345.w);
    out_var_SV_Target1 = gl_FragCoord.z;
}

